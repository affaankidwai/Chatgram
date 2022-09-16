import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'

const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}

const Signin = () => {
  return (
    <div className={style.wrapper}>

    {/* <button type="button" class="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-orange-200 hover:to-red-500 text-white text-2xl font-sans rounded-full box-content w-32 p-2 border-2 shadow-2xl ">
  Sign Up
  
</button> */}
<GoogleButton onClick={googleSignIn} />
</div>
  )
}

export default Signin