
import React from 'react'
import SearchInput from '../../components/sidebar/SearchInput.jsx'
import Conversations from '../../components/sidebar/Conversations.jsx'
import LogoutButton from '../../components/sidebar/LogoutButton.jsx'
import useConversation from '../../zustand/useConversation.js'

const Sidebar = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  
  const class2 = " h-screen w-screen border-r border-gray-300 p-4 flex flex-col"
  
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


