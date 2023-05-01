import React from 'react'
import Card from '../Component/Card'
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full '>
            <Navbar />
            <div style={{ backgroundImage: `url(/images/homeimg.jpg)` }} className='relative w-full h-screen bg-cover bg-center'>
                <div className='absolute z-10 inset-0 bg-black opacity-50'></div>
                <div className='z-50 absolute w-2/3 bottom-10 left-1/2 -translate-x-1/2 my-auto  text-center '>
                    <h1 className='text-6xl text-white' >Amazing Services</h1>
                    <p className='py-4 text-white font-normal text-md leading-relaxed opacity-90 tracking-wider'>Our home delivery company provides reliable, fast, and affordable delivery services to our customers. We prioritize the safety of our customers' packages and offer exceptional customer service to ensure a hassle-free experience.</p>
                    <button onClick={() => navigate('/register')} className='mt-7 rounded-md px-20 py-4 bg-red-700 shadow-md text-lg tracking-wider text-white font-semibold transition-all duration-300 ease-out hover:-translate-y-1 brightness-105 hover:bg-red-700'>Join Us Now</button>
                </div>
            </div>

            <div className='w-full px-20 py-20 border border-transparent border-b-1 border-b-black'>
                <div className='w-full py-5'>
                    <h1 className='text-color-light font-bold tracking-wider text-2xl  mb-10'>HIGH DEMANDS</h1>
                    <div className='w-full grid grid-cols-4 gap-8'>
                        <Card image={"/images/burger.jpg"} />
                        <Card image={"/images/pasta.jpg"} />
                        <Card image={"/images/skewers.jpg"} />
                        <Card image={"/images/tortila.jpg"} />
                    </div>
                </div>
                <div className='w-full py-5'>
                    <h1 className='text-color-light font-bold tracking-wider text-2xl  mb-10'>TOP NEW</h1>
                    <div className='w-full grid grid-cols-4 gap-8'>
                        <Card image={"/images/tortila.jpg"} />
                        <Card image={"/images/pasta.jpg"} />
                        <Card image={"/images/skewers.jpg"} />
                        <Card image={"/images/burger.jpg"} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Home