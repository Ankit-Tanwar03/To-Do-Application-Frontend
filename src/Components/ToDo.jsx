import React from 'react'

const ToDo = () => {

  return (
    <>
        <div className='h-[100vh] flex flex-col justify-start items-center bg-no-repeat bg-cover bg-gradient-to-br from-violet-500 to-orange-500'>
            
            <input type='text' name='text' placeholder='Add Todo' className='mt-[100px] my-[10px] border-solid border-2 rounded-[5px] border-gray-500 px-[10px] py-[5px] w-[500px] focus:outline-none focus:ring focus:ring-violet-300 focus:border-none'/>

            <button type='submit' className='my-[10px] border-solid border-2 border-gray-500 rounded-[5px] bg-indigo-500 text-white w-[500px] py-[5px] hover:bg-green-500'>Create a ToDo</button>

        
        </div>
    </>
  )
}

export default ToDo