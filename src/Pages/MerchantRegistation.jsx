import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Toast from '../Component/Toast';

const MerchantRegistation = () => {
    const [merchantDetails, setMerchantDetails] = useState({});
    const [displayToast, setDisplayToast] = useState('hidden');
    const [response, setResponse] = useState();
    const navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();
        setMerchantDetails({ ...merchantDetails, [event.target.name]: event.target.value });
    }
    
    const handleUpload = (event) => {
        debounce(uploadMerchantDetails, 2000);
      };
      var timerId = null;
      const debounce = (func, delay) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          func();
        }, delay);
      };

    const uploadMerchantDetails = async () => {
        console.log("Merchant Details : ", merchantDetails);
        axios.post('http://localhost:3002/api/add-merchant-details/', merchantDetails)
            .then((response) => {
                console.log("Merchant det is uploaded : ", response);
                setResponse(response);
            })
            .catch((error) => {
                setResponse(error.response);
                console.log("Eroor in upload merchant det : ", error.response);
            });
    }

    const handleToast = (status) => {
        switch (status) {
            case 'block':
                setDisplayToast('block');
                break;
            case 'hidden':
                setDisplayToast('hidden');
                setResponse(null);
                break;
            default:
                break
        }
    }

    useEffect(() => {
        if (response) {
            handleToast('block');
        }
    }, [response])
    return (
        <div className='relative px-20 w-full py-10'>
            <div className={`${displayToast} absolute inset-0 bg-black/30`}><Toast response={response} handleToast={handleToast} /></div>

            <div className='w-full'><button onClick={() => navigate('/home')} className='px-4 py-4 shadow-md bg-background-color-2'><BiArrowBack className='text-white' /></button></div>
            <h1 className='text-center font-semibold text-3xl py-5 text-white'>Merchant <span className='text-red-700'>Registration</span></h1>
            <div className='w-full flex justify-center'>
                <div className='w-full basis-1/2 bg-solid-dark p-8 rounded-md'>
                    <div className='w-full mb-2'>
                        <h4 className='tracking-widest text-color-lightn-2 text-sm font-medium'>RESTAURANT NAME</h4>
                        <input onChange={handleChange} value={merchantDetails?.restaurantName} name="restaurantName" type="text" className={`w-full h-12 my-3 p-3 tracking-wider text-sm rounded-md text-color-white bg-solid-dark-2 border-2 border-solid-dark shadow-shadow-inset-2 outline-none focus:border-primary-1 transition-colors duration-500 `} />
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:gap-6'>
                        <div className='w-full mb-2'>
                            <h4 className='tracking-widest text-color-lightn-2 text-sm font-medium'>CONTACT NAME</h4>
                            <input onChange={handleChange} value={merchantDetails?.contactName} name="contactName" type="text" className={`w-full h-12 my-3 p-3 tracking-wider text-sm rounded-md text-color-white bg-solid-dark-2 border-2 border-solid-dark shadow-shadow-inset-2 outline-none focus:border-primary-1 transition-colors duration-500 `} />
                        </div>
                        <div className='w-full mb-2'>
                            <h4 className='tracking-widest text-color-lightn-2 text-sm font-medium'>PINCODE</h4>
                            <input onChange={handleChange} value={merchantDetails?.pincode} name="pincode" type="number" className={`w-full h-12 my-3 p-3 tracking-wider text-sm rounded-md text-color-white bg-solid-dark-2 border-2 border-solid-dark shadow-shadow-inset-2 outline-none focus:border-primary-1 transition-colors duration-500 `} />
                        </div>
                    </div>

                    <div className='w-full mb-2'>
                        <h4 className='tracking-widest text-color-lightn-2 text-sm font-medium'>Location</h4>
                        <input onChange={handleChange} value={merchantDetails?.location} name="location" type="text" className={`w-full h-12 my-3 p-3 tracking-wider text-sm rounded-md text-color-white bg-solid-dark-2 border-2 border-solid-dark shadow-shadow-inset-2 outline-none focus:border-primary-1 transition-colors duration-500 `} />
                    </div>
                    <div className='w-full mb-2'>
                        <h4 className='tracking-widest text-color-lightn-2 text-sm font-medium'>WEBSITE</h4>
                        <input onChange={handleChange} placeholder='https://www.example.com' value={merchantDetails?.website} name="website" type="text" className={`w-full h-12 my-3 p-3 tracking-wider text-sm rounded-md text-color-white bg-solid-dark-2 border-2 border-solid-dark shadow-shadow-inset-2 outline-none focus:border-primary-1 transition-colors duration-500 `} />
                    </div>
                    <div className='w-full mb-2'>
                        <h4 className='tracking-widest text-color-lightn-2 text-sm font-medium'>PHONE NUMBER</h4>
                        <input onChange={handleChange} name="phoneNumber" value={merchantDetails?.phoneNumber} type="text" className={`w-full h-12 my-3 p-3 tracking-wider text-sm rounded-md text-color-white bg-solid-dark-2 border-2 border-solid-dark shadow-shadow-inset-2 outline-none focus:border-primary-1 transition-colors duration-500 `} />
                    </div>
                    <div className='w-full mb-3'>
                        <h4 className='tracking-widest text-color-lightn-2 text-sm font-medium'>AVERAGE DAILY TRANSACTION</h4>
                        <input onChange={handleChange} name="averageDailyTransaction" value={merchantDetails?.averageDailyTransaction} type="text" className={`w-full h-12 my-3 p-3 tracking-wider text-sm rounded-md text-color-white bg-solid-dark-2 border-2 border-solid-dark shadow-shadow-inset-2 outline-none focus:border-primary-1 transition-colors duration-500 `} />
                    </div>
                    <button onClick={handleUpload} className='text-white font-semibold rounded-sm w-1/2 py-3 bg-gradient-to-br from-red-700 to-rose-800 hover:from-rose-600 hover:to-red-800 tracking-wider'>
                        REGISTER
                    </button>6
                </div>
            </div>
        </div>
    )
}

export default MerchantRegistation