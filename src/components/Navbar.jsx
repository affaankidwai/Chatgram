import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  h-20 flex justify-between items-center p-4'>
    
      <h1 className='text-white text-4xl font-extralight'>Chatgram</h1>
      <button type="button" class="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-orange-200 hover:to-red-500 text-white text-2xl font-sans rounded-full box-content w-32 p-2 border-2 shadow-2xl ">
  Sign In
  
</button>

    
    </div>
      
  )
}

export default Navbar;