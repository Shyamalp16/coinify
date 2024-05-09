import Navigation from '@/components/site/navigation'
import { getAuthUserDetails } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const authUser = await currentUser()
  if(!authUser) return redirect('/sign-in')

  const user = await getAuthUserDetails()
  return (
    <>
      <div>Dashboard</div>
    </>
  )
}

export default Page