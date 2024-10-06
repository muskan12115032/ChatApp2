import React, { useEffect } from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import {TiMessages} from "react-icons/ti"
import useConversation from '../../../zustand/useConversation.js'
import { useAuthContext } from '../../../context/AuthContext.jsx'
import { IoMdArrowRoundBack } from "react-icons/io";


const MessageContainer = () => {
   const {selectedConversation, setSelectedConversation} = useConversation()
  

//    useEffect(()=>{
//     return ()=>{setSelectedConversation(null)}
//    },[setSelectedConversation])
        const handleClick = ()=>{
            setSelectedConversation(null)
        }
  return (
    <div className={` h-screen md:min-w-[450px]  flex flex-col`}>
        <div className='bg-slate-500 px-4 py-2 mb-2 flex justify-between'>
        <div className='mt-2 flex justify-between gap-2'>
        <span className='label-text mt-0.5'>To: </span><span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <button onClick={handleClick} className='btn btn-circle bg-gray-700 text-white'>
        <IoMdArrowRoundBack className='w-6 h-6 outline-none'/>
        </button>


        </div>
        <Messages />
        <MessageInput />
        
  
    </div>
  )
}

export default MessageContainer


