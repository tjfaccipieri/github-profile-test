import { useEffect, useState } from "react";

function ProfileData() {
  const [response, setResponse] = useState<any>({})

  async function getDataFromGithub(){
    const data = await fetch('https://api.github.com/users/tjfaccipieri')
    const res = await data.json()
    setResponse(res)
  }

  useEffect(() => {
    getDataFromGithub()
  }, [])

  return (
    <div className="mx-auto container flex p-4 gap-8 items-center bg-slate-800">
      <img src={response.avatar_url} alt="" className="rounded-full w-44 border-white border-2 p-2" />
      <section className="flex flex-col gap-2">
        <h2 className="text-5xl font-extrabold font-mono">{response.name}</h2>
        <p className="text-3xl font-bold font-mono">/{response.login}</p>
        <p>Total public repositories: {response.public_repos} / Total followers: {response.followers}</p>
      </section>
    </div>
  )
}

export default ProfileData