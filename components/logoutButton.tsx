'use client'
import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import {useState} from 'react'
import { toast } from "sonner"

const Logout = () => {
    const [loading, setLoading]=useState<boolean>(false)
    const handleLogout=(e:React.MouseEvent)=>{
     console.log("logout clicked")
      toast("You have been logged out")
    }
  return (
  <Button 
  variant="outline" 
  className='cursor-pointer'
  onClick={handleLogout}
  >
    {loading ? <Loader2 className='animate-spin'/> : "Logout"
    }
    </Button>
  )
}

export default Logout