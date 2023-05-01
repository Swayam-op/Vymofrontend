import React from 'react'
import { useNavigate } from 'react-router-dom';
const mainPageImage = '/images/mainpageImage.jpg';
const Root = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ backgroundImage: `url(${mainPageImage})` }} className='relative w-full h-screen bg-cover bg-center'>
                <div className='absolute inset-0 bg-black opacity-30'></div>
                <div className='w-full h-full grid grid-cols-2'>
                    <div className='px-20 my-auto realtive z-50 w-full'>
                        <h2 className='text-2xl text-color-lightn tracking-wide'>Food Delievery</h2>
                        <h1 className='text-9xl text-white mt-2 my-5' ><span className='text-red-700'>VY</span>MO</h1>
                        <p className='text-white font-normal text-md leading-relaxed opacity-90 tracking-wider'>Lorem ipsum dolo veritatis alias ipsa libero labore, necessitatibus pariatur blanditiis nam exercitationem, numquam, corporis quasi illum culpa officia. Est, et assumenda!</p>
                        <button onClick={() => navigate('/home')} className='mt-7 rounded-sm px-14 py-4 bg-red-600 shadow-md text-lg tracking-wider text-white font-semibold transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-red-700'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Root