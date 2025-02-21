"use client"
import React from "react"
import { Button } from "./ui/button"
import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"

function Header() {
  const { user } = useUser()

  return (
    <div className='flex items-center justify-between p-5'>
      {user && (
        <h1 className='text-2xl'>
          {user?.fullName}
          {`'s`} Space
        </h1>
      )}

      <div>
        <SignedOut>
          <SignInButton />
          {/* <SignUpButton /> */}
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header
