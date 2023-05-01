import React from 'react'
import { GiNorthStarShuriken } from 'react-icons/gi';

const Footer = () => {
  return (
    <div id='footer' className='w-full px-4 md:px-8 lg:px-16 py-16  flex flex-col items-center '>
      <GiNorthStarShuriken className='text-4xl text-color-lightn animate-spin-extra-slow' />
      <h1 className='tracking-wider text-color-white font-medium my-6 text-center'>VY<span className='text-red-700'>MO</span></h1>
      <h2 className='text-color-lightn font-medium tracking-wide text-center'>@2023, We provide the best services to  <span className='dont-bold'>customers & merchants</span></h2>
    </div>
  )
}

export default Footer