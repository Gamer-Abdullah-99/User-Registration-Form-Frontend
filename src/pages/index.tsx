import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '@/store/atom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [userData, setUserData] = useRecoilState(userState)

  return (
    <main className='pt-16 w-screen h-screen flex flex-col gap-2 text-center items-center justify-center'>
      {userData?.username ? <p className='font-bold text-2xl'>Hello {userData.username}, have a good day</p>
        : <>
          <p className='font-bold text-2xl'>Welcome to User Registration Form</p>
          <p className='font-bold text-2xl'>Login to view greeting</p>
        </>}
    </main>
  )
}
