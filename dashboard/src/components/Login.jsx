import React, {useState} from 'react'

import loginImg from '../data/login.jpeg'
import { useStateContext } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom';

export default function Login() {
    const {scope, setScope} = useStateContext();
    const [selectedValue, setSelectedValue] = useState(''); // this is for the dropdown
    const {setCurrentScope} = useStateContext();
    
  // handle select change event
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Login As</label>
                    <select className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    value={selectedValue} onChange={handleSelectChange}>
                        <option value="admin">HR Admin</option>
                        <option value="employee">Employee</option>
                        <option value="exec">Executive</option>
                        <option value="intern">Intern</option>
                    </select>

                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <Link to= '/home'>
                  
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                onClick={()=> {setCurrentScope(selectedValue)}}>SIGN IN</button></Link>
               
                <p className='text-center text-gray-400'>Don't have an account? <Link to="/home"><span className='text-white font-semibold'>Sign Up</span></Link></p>

            </form>
        </div>
    </div>
  )
}