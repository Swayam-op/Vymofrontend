import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='hidden top-0 w-full py-8 px-8 md:flex flex-row items-center z-50 bg-background-color-2 bg-opacity-70'>
      <h1 className='text-white text-lg font-semibold pr-5'><span className='text-red-700'>VY</span>MO</h1>
      <div className='flex-grow flex justify-end'>
        <Link to={'/home'} className='block px-5 text-sm text-color-lightn hover:text-white cursor-pointer'>Home</Link>
        <Link to={'/register'} className='block px-5 text-sm text-color-lightn hover:text-white cursor-pointer'>Register</Link>
        <Link to={'/showMerchants'} className='block px-5 text-sm text-color-lightn hover:text-white cursor-pointer'>Show Merchants</Link>
      </div>

    </div>
  )
}

export default Navbar