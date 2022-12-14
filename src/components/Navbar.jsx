import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './Signin'
import LogOut from './LogOut'

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user);
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  h-20 flex justify-between items-center p-4'>
        
      <h1 className='text-white text-4xl font-light'>Chatgram</h1>
      {user ? <LogOut /> : <SignIn />}

      
      

    
    </div>
      
  )
}

export default Navbar;