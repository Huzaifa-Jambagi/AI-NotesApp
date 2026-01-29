"use client"
import { useState } from 'react'
import { shadow } from '@/styles/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { ModeToggle } from './darkModetoggle'
import Logout from './logoutButton'
import { Menu, X } from 'lucide-react';

const Header = () => {

  const user = 1
  const[open,setOpen]=useState<boolean>(false)
  return (
    <header
      className='relative flex items-center justify-between 
     px-3 w-full h-15 bg-popover sm:px-8 shadow-2xl'
      style={{
        boxShadow: shadow
      }}>
      <Link href='/' className='flex items-end gap-1'>
        <Image
          src='/notezy.png'
          height={40}
          width={40}
          alt='logo'
          className='rounded-full' />
        <h1 className='font-semibold pb-2'>Notezy</h1>
      </Link>

      <div className="hidden sm:flex gap-2  ">
        {user ?
          (<Logout />) :
          (<Button variant="outline" className='cursor-pointer'>Login</Button>)
        }
        <ModeToggle />
      </div>

 {/* Mobile hamburger (always visible on mobile) */}
      <Button
        className="sm:hidden"
        onClick={() => setOpen(prev => !prev)}
        variant="ghost"
        size="icon"
      >
        {!open && <Menu />}
      </Button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-0 right-0 w-48 bg-popover shadow-lg 
        flex flex-col gap-2 p-4 border border-gray-500 sm:hidden">
          <div className="flex justify-end">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(false)}
      >
        <X />
      </Button>
    </div>
          {user ? <Logout /> : <Button variant="outline">Login</Button>}
           <div className="flex justify-center">
                 <ModeToggle />
           </div>
        </div>
      )}

    </header>
  )
}

export default Header