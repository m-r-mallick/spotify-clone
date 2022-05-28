import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React from 'react'

const CenterScreen = () => {
  const { data: session } = useSession()
  return (
    <div className="flex flex-grow flex-col text-white">
      <header className="absolute top-5 right-8 ">
        <div className="flex cursor-pointer items-center justify-end space-x-3 rounded-full bg-black p-3 pr-3 opacity-90 hover:opacity-80">
          <img
            className="h-10 w-10 rounded-full"
            src={session?.user.image}
            alt="avatar"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </header>

      <section className="flex h-80 items-end space-x-7 bg-gradient-to-b from-red-500 to-black p-8 text-white"></section>
    </div>
  )
}

export default CenterScreen
