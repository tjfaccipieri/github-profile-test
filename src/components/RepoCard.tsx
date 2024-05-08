import { RiJavaLine, RiJavascriptFill } from 'react-icons/ri';
import { SiCss3, SiHtml5, SiPython, SiTypescript } from 'react-icons/si';

function RepoCard(repo: any) {
  let icon;

  const language = String(repo.repo.language).toLowerCase();

  switch (language) {
    case 'java':
      icon = <RiJavaLine />;
      break;

    case 'typescript':
      icon = <SiTypescript />;
      break;

    case 'html':
      icon = <SiHtml5 />;
      break;

    case 'python':
      icon = <SiPython />;
      break;

    case 'scss':
      icon = <SiCss3 />;
      break;

    case 'css':
      icon = <SiCss3 />;
      break;

    case 'sass':
      icon = <SiCss3 />;
      break;

    default:
      icon = <RiJavascriptFill />;
  }

  console.log(repo);

  return (
    <div className="flex flex-col gap-4 justify-between items-center px-8 py-4 border-2 border-teal-800 cursor-pointer hover:bg-teal-800 rounded">
      <h3 className="text-lg font-bold uppercase">/{repo.repo.name}</h3>
      <div className="flex justify-between items-center w-full">
        <section className="flex flex-col gap-2">
          <p>
            Criado em:{' '}
            {new Date(repo.repo.created_at).toLocaleDateString('pt-BR')}
          </p>
        </section>
        <div className="flex flex-col items-center">
          <p className="text-4xl">{icon}</p>
          <p className="text-xs">{repo.repo.language}</p>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
