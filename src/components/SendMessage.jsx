// import { addDoc, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {auth,db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const style = {
    form: `h-14 w-full max-w-[720px] flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-white text-black outline-none border-none`,
    button: `bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-orange-500 hover:to-red-400 text-white text-2xl font-sans rounded-full box-content w-32 p-2 border-2 shadow-2xl`

}



const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault()
      if (input === '') {
          alert('Please enter a valid message')
          return
      }
      const {uid, displayName} = auth.currentUser
      await addDoc(collection(db, 'messages'), {
          text: input,
          name: displayName,
          uid,
          timestamp: serverTimestamp()
      })
      setInput('')
      scroll.current.scrollIntoView({behavior: 'smooth'})
    }
  
    return (
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Message'
        />
        <button className={style.button} type='submit'>
          Send
        </button>
      </form>
    );
  };
  
  export default SendMessage;