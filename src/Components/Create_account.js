import React from 'react'

const Create_account = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-no-repeat bg-cover bg-gradient-to-br from-violet-500 to-orange-500'>

        <form className='flex flex-col items-center px-[30px] py-[30px] rounded-[10px] backdrop-blur-md brightness-105'>
            <img src='https://img.freepik.com/free-vector/illustration-list_53876-28518.jpg?w=996&t=st=1708351724~exp=1708352324~hmac=7abfcd37e8a04564a5fb503c0d25dcc2951c804c15f2a808cc4654ccfb632f88' alt="logo" className='w-[250px]'/>
            <input type='text' name='firstName' placeholder='Enter your First name' className='my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>
            <input type='text' name='lastName' placeholder='Enter your Last name' className='my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>
            <input type='email' name='email' placeholder='Enter your email' className='my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>
            <input type='password' name='password' placeholder='Enter your password' className='my-[10px] border-solid rounded-[5px] border-2 border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <input type='button' value ='Create Account'className='my-[10px] border-solid border-2 border-gray-500 rounded-[5px] bg-indigo-500 text-white w-[500px] py-[5px] hover:bg-green-500'/>
        </form>

    </div>
  )
}

export default Create_account