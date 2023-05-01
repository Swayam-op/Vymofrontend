import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MerchantDetailsCard from '../Component/MerchantDetailsCard';
const ShowMerchantDetails = () => {
    const [merchants, setMerchants] = useState();
    useEffect(()=>{
        axios.get('http://localhost:3002/api/get-merchant-details')
        .then((response)=>{
            console.log("merchant succ : ",response);
            setMerchants(response.data.merchantList);
        })
        .catch((error)=>{
            console.log("get merchant error : ",error);
        })
    },[])
  return (
    <div className='w-full p-20'>
    <h1 className='text-center text-2xl text-white font-semibold'>Registered <span className='text-red-700'>Merchants</span> </h1>
    <div className='grid grid-cols-4 gap-5'>
    {
        merchants && merchants.map((merchant, index)=>{
            return (
                <div key={index}>
            hii
            <MerchantDetailsCard merchant={merchant} />
            </div>
            )
            
        })
    }
    </div>
    </div>
  )
}

export default ShowMerchantDetails