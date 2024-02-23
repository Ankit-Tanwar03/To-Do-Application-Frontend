import axios from 'axios';
import React, { useState } from 'react'

const Create_account = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const submitData = async () => {
    const data ={
      firstName: firstName,      
      lastName: lastName,
      email: userEmail,
      password: userPassword      
    };

    const res = await axios.post("/api/user/createUser", data)
    console.log(res)
  }

  const handleCreateAccount = (event) => {
    event.preventDefault();
    submitData();
    setFirstName("");
    setLastName("");
    setUserEmail("");
    setUserPassword("");
  }

  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-no-repeat bg-cover bg-gradient-to-br from-violet-500 to-orange-500'>

        <form onSubmit ={handleCreateAccount} className='flex flex-col items-center px-[30px] py-[30px] rounded-[10px] backdrop-blur-md brightness-105'>
            <img src='https://img.freepik.com/free-vector/illustration-list_53876-28518.jpg?w=996&t=st=1708351724~exp=1708352324~hmac=7abfcd37e8a04564a5fb503c0d25dcc2951c804c15f2a808cc4654ccfb632f88' alt="logo" className='w-[250px]'/>

            <input type='text' name='firstName' placeholder='Enter your First name' value = {firstName} onChange= {(event) => setFirstName(event.target.value)} className='my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <input type='text' name='lastName' placeholder='Enter your Last name' value = {lastName} onChange= {(event) => setLastName(event.target.value)} className='my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <input type='email' name='email' placeholder='Enter your email' value = {userEmail} onChange= {(event) => setUserEmail(event.target.value)} className='my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <input type='password' name='password' placeholder='Enter your password' value = {userPassword} onChange= {(event) => setUserPassword(event.target.value)} className='my-[10px] border-solid rounded-[5px] border-2 border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <button type='submit' className='my-[10px] border-solid border-2 border-gray-500 rounded-[5px] bg-indigo-500 text-white w-[500px] py-[5px] hover:bg-green-500'>Create Account</button>
        </form>

    </div>
  )
}

export default Create_account