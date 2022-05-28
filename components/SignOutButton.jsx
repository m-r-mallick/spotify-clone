import { LogoutIcon } from '@heroicons/react/outline'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <button
      className="flex items-center space-x-2 transition duration-300 hover:text-white"
      onClick={() => signOut()}
    >
      <LogoutIcon className="h-5 w-5" />
      <p>Log Out</p>
    </button>
  )
}

export default SignOutButton
