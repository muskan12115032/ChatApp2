import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from '../../../hooks/useSendMessage.js'

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const {loading, sendMessage} =  useSendMessage()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!message)
    return

    await sendMessage(message);

    setMessage("")
  }
  const handleKeyPress = async(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior of newline insertion
      if(!message)
       return
     await sendMessage(message);
     setMessage("")
    }
  };

  const rows = Math.max(Math.ceil(message.length / 40), 1); // Adjust the number of characters per row as needed

   return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative '>
        <div style={{ position: 'relative', paddingRight: '40px' }}>
            <textarea
            //  type='text'
             className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white resize-none'
             placeholder='Send a message'
             value = {message}
             rows={rows} 
             onChange={(e)=>{setMessage(e.target.value)}}
             onKeyDown={handleKeyPress} 
             />
             <button type = "submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
               {loading ? <span className='loading loading-spinner '></span> :  <BsSend />}
             </button>
        </div>
        </div>
      
    </form>
  )
}

export default MessageInput





