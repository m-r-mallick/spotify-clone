import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-5 text-white">
      <img
        className="mb-5 w-52"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
        alt="spotify-logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="rounded-full bg-gray-300 p-5 font-bold text-black transition duration-500 hover:bg-blue-700 hover:text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login With {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
