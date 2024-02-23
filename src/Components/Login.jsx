import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const submitData = async() => {
    const data ={
      email: userEmail,
      password: userPassword  
    };

    const res = await axios.post("api/user/loginUser", data) 
    console.log(res.data.token)

    if(res.data.token){
      return(
        navigate("/createTodo")
      )
    }

  }

  const handleLogin = (event) => {
    event.preventDefault();
    submitData();
    setUserEmail("")
    setUserPassword("")
  }
    
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-no-repeat bg-cover bg-gradient-to-br from-violet-500 to-orange-500'>

        <form onSubmit={handleLogin} className='flex flex-col items-center px-[30px] py-[30px] rounded-[10px] backdrop-blur-md brightness-105'>
            <img src='https://img.freepik.com/free-vector/illustration-list_53876-28518.jpg?w=996&t=st=1708351724~exp=1708352324~hmac=7abfcd37e8a04564a5fb503c0d25dcc2951c804c15f2a808cc4654ccfb632f88' alt="logo" className='w-[250px]'/>

            <input type='email' name='email' placeholder='Enter your email' value={userEmail} onChange={(event) => setUserEmail(event.target.value)} className='my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <input type='password' name='password' placeholder='Enter your password' value={userPassword} onChange={(event) => setUserPassword(event.target.value)} className='my-[10px] border-solid rounded-[5px] border-2 border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <button type='submit' className='my-[10px] border-solid border-2 border-gray-500 rounded-[5px] bg-indigo-500 text-white w-[500px] py-[5px] hover:bg-green-500'>Login</button>
            <NavLink to={"/createAccount"}>
                <button type='submit' className='my-[10px] border-solid border-2 border-gray-500 rounded-[5px] bg-indigo-500 text-white w-[500px] py-[5px] hover:bg-green-500'>Create Account</button>
            </NavLink>
        </form>

    </div>
  )
}

export default Login