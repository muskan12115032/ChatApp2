import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser} = useAuthContext()
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
  }, []); 

  const class1 = isMobile ? "h-screen  flex flex-col  " : "p-4 h-screen flex items-center justify-center"
  
  return (
  
    <div className={`${class1}`}>
      <Routes>
        <Route path = '/' element={authUser ? <Home /> :<Navigate to="/login"/> } />
        <Route path = '/login' element={authUser ?<Navigate to="/"/> : <Login />} />
        <Route path = '/signup' element={authUser ? <Navigate to="/"/> : <SignUp />} />
      </Routes>
      <Toaster />
      
    </div>
  )
}

export default App
