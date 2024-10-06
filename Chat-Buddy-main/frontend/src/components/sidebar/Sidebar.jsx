
import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import useConversation from '../../zustand/useConversation.js'

const Sidebar = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  const class1 = " h-screen w-screen"
  const isMobile = window.innerWidth < 768;
  const class3 = isMobile ? 'h-screen w-screen' : "w-max border-r border-gray-300 p-4 flex flex-col"
  const class2 = "w-max border-r border-gray-300 p-4 flex flex-col"
  
  return (
    
       <div className={`${class2} `}>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
      
      </div>
    

   
  )
}

export default Sidebar


