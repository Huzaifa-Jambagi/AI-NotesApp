import { shadow } from '@/styles/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { ModeToggle } from './darkModetoggle'
const header = () => {
  const user=1
  return (
    <header
     className='relative flex items-center justify-between 
     px-3 w-full h-15 bg-popover sm:px-8 shadow-2xl'
     style={{
      boxShadow:shadow
     }}>
        <Link href='/' className='flex items-end gap-1'>
        <Image 
        src='/notezy.png' 
        height={40}
        width={40}
        alt='logo'
        className='rounded-full'/>
        <h1 className='font-semibold pb-2'>Notezy</h1>
        </Link>
        <div className="flex gap-2">
           {user ? 
        (<Button variant="outline" className='cursor-pointer'>Logout</Button>) :
         (<Button variant="outline" className='cursor-pointer'>Login</Button>)
         }    
         <ModeToggle/>
        </div>
         </header>
  )
}

export default header