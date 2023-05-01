import React from 'react'
import {VscClose} from 'react-icons/vsc';
const Toast = ({response, handleToast}) => {
  return (
    <div className='w-fill h-full flex justify-center items-center bg-black/30'>
      <div className='relative w-1/3 p-10 bg-solid-dark-2 rounded-md shadow-md'>
        <h1 className={`text-center text-xl font-semibold  tracking-wider mb-2 ${response?.data?.success?'text-green-600' : 'text-red-600'}`}>{ response?.data?.success ? 'SUCSESS' : 'FAILED' }</h1>
        <h2 className='text-center text-md font-medium text-color-lightn tracking-wider mb-2'>Status Code : {response?.status}</h2>
        <h3 className='text-color-white text-center text-sm tracking-wider mb-2'>{response?.data?.message}</h3>
        <button onClick={()=>handleToast('hidden')} className='absolute -translate-x-1/2 left-1/2 -top-10 px-1.5 py-1.5 bg-solid-dark rounded-full '><VscClose className={`text-xl ${response?.data?.success?'text-green-600' : 'text-red-600'}`}/></button>
      </div>
    </div>
  )
}
export default Toast