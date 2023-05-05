import React from 'react'

const MerchantDetailsCard = ({merchant}) => {
  return (
    <div className='w-full rounded-md bg-light-dark shadow-lg hover:bg-solid-dark p-5'>
    <h1 className='text-white text-sm py-1 font-semibold'>Restaurant Name : <span className='text-red-700'>{merchant?.restaurantName}</span> </h1>
    <h1 className='text-white text-sm py-1 font-medium'>Contact Name : {merchant?.contactName}</h1>
    <h1 className='text-white text-sm py-1 font-medium'>Phone Number : {merchant?.phoneNumber}</h1>
    <h1 className='text-white text-sm py-1 font-medium'>Pincode : {merchant?.pincode}</h1>
    <h1 className='text-white text-sm py-1 font-medium'>location : {merchant?.location}</h1>
    <h1 className='text-white text-sm py-1 font-medium'>website : {merchant?.website}</h1>
    <h1 className='text-white text-sm py-1 font-medium'>Average Daily Transaction : {merchant?.averageDailyTransaction}</h1>
    </div>
  )
}

export default MerchantDetailsCard