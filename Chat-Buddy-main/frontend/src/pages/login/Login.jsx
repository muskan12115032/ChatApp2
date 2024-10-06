import React, { useState,useEffect  } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js';

const Login = () => {

    const {loading, login} = useLogin()

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(userName, password)


    }
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

  const class1 = isMobile ? "mt-52" :"flex flex-col items-center justify-center min-w-96 mx-auto"
    
  return (
    <div className='flex flex-col items-center '>
    <div className={`${class1}`}>
    <div className={`w-full  p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0`}>
        <h1 className='  text-3xl font-semibold text-center text-gray-300'>Login
        <span className='text-blue-500'> Chat Buddy</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                <span className='text-base label-text'>
                    Username
                </span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
                value={userName}
                onChange={(e)=>{setUserName(e.target.value)}}
                 />
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type='password' placeholder='Enter Password' 
                 className='w-full input input-bordered h-10'
                 value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}
                 />
            </div>
            <Link  to='/signup' className='text-sm hover :underline hover:text-blue-600 mt-2 inline-block'>
                {"Dont't"} have an account?
            </Link>
            <div>
                <button className='btn btn-block btn-sm mt-2'
                disabled = {loading}
                >
                    {loading? <span className='loading loading-spinner mx-auto'></span> : "Login"}
                </button>
            </div>
        </form>

    </div>
      
    </div>
    </div>
  )
}

export default Login


