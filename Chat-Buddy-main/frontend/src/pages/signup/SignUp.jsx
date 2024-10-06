import React, { useState, useEffect } from 'react'
import GenderCheckbox from './GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName:'',
        userName:'',
        password:'',
        confirmPassword:'',
        gender:''
    })
    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender)=>{
        setInputs({...inputs, gender})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await signup(inputs);
        
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
    const class1 = isMobile ? "mt-40" :"flex flex-col items-center justify-center min-w-96 mx-auto"

  return (
    <div className='flex flex-col items-center '>

    <div className={`${class1}`}>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className=' max-[322px]:text-2xl text-3xl font-semibold text-center text-gray-300'>Sign Up
        <span className='text-blue-500'> Chat Buddy</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>
                    Full Name
                </span>
                </label>
                <input type="text" placeholder='Harry Potter'  className='w-full input input-bordered h-10'
                 value ={inputs.fullName} 
                 onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}   
                 />
            </div>

            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>
                     Username
                </span>
                </label>
                <input type="text" placeholder='harrypotter' className='w-full input input-bordered h-10'
                    value ={inputs.userName} 
                 onChange={(e)=>setInputs({...inputs, userName:e.target.value})}
                 />
            </div>

            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>
                    Password
                </span>
                </label>
                <input type="password" placeholder=' Enter Password'  className='w-full input input-bordered h-10'
                 value ={inputs.password} 
                 onChange={(e)=>setInputs({...inputs, password:e.target.value})}    
                 />
            </div>

            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>
                    Confirm Password
                </span>
                </label>
                <input type="password" placeholder=' Confirm Password'  className='w-full input input-bordered h-10' 
                    value ={inputs.confirmPassword} 
                 onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})}
                />
            </div>
            <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}  />

            <Link  to='/login' className='text-sm hover :underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </Link>
            

            <div>
                <button className='btn btn-block btn-sm mt-2 border border-slate-700'
                disabled = {loading}
                >
                    {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                </button>
            </div>

        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp

