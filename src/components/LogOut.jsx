import React from 'react'
import { auth } from '../firebase'



const Logout = () => {
    const signOut = () => {
        signOut(auth)
    }
  return (
    <div>
        <button onClick={() => auth.signOut} type="button" class="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-orange-200 hover:to-red-500 text-white text-2xl font-sans rounded-full box-content w-32 p-2 border-2 shadow-2xl ">
  Log Out
  
</button>
    </div>
  )
}

export default Logout