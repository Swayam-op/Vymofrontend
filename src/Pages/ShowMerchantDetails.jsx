import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MerchantDetailsCard from '../Component/MerchantDetailsCard';
import { BiArrowBack } from 'react-icons/bi';

const ShowMerchantDetails = () => {
    const [merchants, setMerchants] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3002/api/get-merchant-details')
            .then((response) => {
                console.log("merchant succ : ", response);
                setMerchants(response.data.merchantList);
            })
            .catch((error) => {
                console.log("get merchant error : ", error);
            })
    }, [])
    return (
        <div className='w-full p-20'>
            <div className='w-full'><button onClick={() => navigate('/home')} className='px-4 py-4 shadow-md bg-background-color-2'><BiArrowBack className='text-white' /></button></div>
            <h1 className='text-center text-2xl text-white font-semibold mb-6'>Registered <span className='text-red-700'>Merchants</span> </h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    merchants && merchants.map((merchant, index) => {
                        return (
                            <div key={index}>
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