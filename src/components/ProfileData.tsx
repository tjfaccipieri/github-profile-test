import { useEffect, useState } from 'react';
import RepoCard from './RepoCard';

function ProfileData() {
  const [user, setUser] = useState<any>({});
  const [repos, setRepos] = useState<any[]>([]);

  async function getDataFromGithub() {
    const data = await fetch('https://api.github.com/users/tjfaccipieri');
    const res = await data.json();
    setUser(res);
  }

  async function getUserRepos() {
    const data = await fetch('https://api.github.com/users/tjfaccipieri/repos');
    const res = await data.json();
    setRepos(res);
    console.log(res);
  }

  useEffect(() => {
    getDataFromGithub();
    getUserRepos();
  }, []);

  return (
    <>
      <div className="mx-auto container flex p-4 mt-8 gap-8 items-center bg-slate-800">
        <img
          src={user.avatar_url}
          alt=""
          className="rounded-full w-44 border-white border-2 p-2"
        />
        <section className="flex flex-col gap-2">
          <h2 className="text-5xl font-extrabold font-mono">{user.name}</h2>
          <p className="text-3xl font-bold font-mono">/{user.login}</p>
          <p>
            Total public repositories: {user.public_repos} / Total followers:{' '}
            {user.followers}
          </p>
        </section>
      </div>
      <div className="grid grid-cols-3 gap-8 container mx-auto mt-8 font-mono">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
}

export default ProfileData;
