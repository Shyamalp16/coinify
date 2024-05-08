import Navigation from '@/components/site/navigation'
import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full'>
        <Navigation />
        {children}
    </div>
  )
}

export default AuthLayout