import React from 'react'

const Card = ({ image }) => {
  return (
    <div className='group relative w-full overflow-hidden rounded-lg  shadow-xl cursor-pointer'>
      <h1 className='group-hover:z-50 absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-center font-medium '>Add To Cart</h1>
      <div className='absolute z-20 inset-0 group-hover:bg-black opacity-50'></div>
      <div className='w-full relative z-10 transition-all duration-300 ease-in group-hover:scale-110'><img src={image} width={"100%"} alt="" /></div>
    </div>
  )
}

export default Card