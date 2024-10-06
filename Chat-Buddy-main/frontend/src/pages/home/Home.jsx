import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';
import useConversation from '../../zustand/useConversation.js';
import MobileSidebar from '../../mobileAssests/components/Sidebar.jsx';
import MobileMessageContainer from "../../mobileAssests/components/messageContainer/MessageContainer.jsx"

const Home = () => {
  const { selectedConversation } = useConversation();
  const class1 = "flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <>
      {!isMobile ? (
        <div className={`${class1}`}>
          <Sidebar />
          <MessageContainer />
        </div>
      ) : (
        <MobileHome />
      )}
    </>
  );
};

export default Home;

const MobileHome = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  useEffect(()=>{
    return ()=>{setSelectedConversation(null)}
   },[setSelectedConversation])

  return (
    <>
    {!selectedConversation ?(<div>
      <MobileSidebar />
    </div>)  : (
      
       <div>
       <MobileMessageContainer />
       </div>
      
      
    )
    }

    </>
    
    
  );
};
