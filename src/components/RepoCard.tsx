import { RiJavaLine, RiJavascriptFill } from 'react-icons/ri';
import { SiHtml5, SiTypescript } from 'react-icons/si';

function RepoCard(repo: any) {
  let icon;

  const language = String(repo.repo.language).toLowerCase()

  console.log(language);

  switch (language) {
    case 'java':
      icon = <RiJavaLine />;
      break;

    case 'typescript':
      icon = <SiTypescript />
      break

    case 'html':
      icon = <SiHtml5 />
      break

    default:
      icon = <RiJavascriptFill />;
  }

  console.log(repo);
  return (
    <div className="flex justify-between items-center px-8 bg-teal-800 rounded">
      <section className="flex flex-col gap-2">
        <h3 className="text-xl font-bold ">/{repo.repo.name}</h3>
        <p>
          Criado em:{' '}
          {new Date(repo.repo.created_at).toLocaleDateString('pt-BR')}
        </p>
      </section>
      <div className='flex flex-col items-center'>
        <p className="text-4xl">{icon}</p>
        <p className='text-xs'>{repo.repo.language}</p>
      </div>
    </div>
  );
}

export default RepoCard;
