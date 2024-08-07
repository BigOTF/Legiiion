import React, { useState, useEffect } from 'react'
import CountdownTimer from './Countdown';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
/* https://api.escuelajs.co/api/v1/products */
/* https://fakestoreapi.com/products */

const Sales = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchItems = async() => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const theData = await response.json();
                console.log(theData);
                return setProduct(theData);
            } catch(err) {
                console.log(err.message);
            }
        }
        fetchItems();
    }, []);

    const ProductData = () => {
        return  product.map((data) => {
            return (
                <div key={data.id}>
                    <img src={data.images}/>
                </div>
            )
        })
    }

    const targetDate = '2024-08-10T00:00:00';


  return (
    <section className='px-[135px] mt-[100px] mb-[100px]'>
        <div className='flex items-center gap-3'>
            <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
            <p className='text-[16px] font-semibold text-[#DB4444]'>Today's</p>
        </div>

        <div className='flex items-center justify-between mt-[15px]'>
            <div className='flex items-center gap-[100px]'>
                <p className='text-[36px] font-semibold'>Flash Sales</p>
                <CountdownTimer targetDate={targetDate} />
            </div>

            <div className='flex items-center gap-4'>
                <div className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-[50%] flex items-center justify-center'>
                    <FaArrowLeft className='w-[16px] h-[14px] cursor-pointer'/>
                </div>

                <div className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-[50%] flex items-center justify-center'>
                    <FaArrowRight className='w-[16px] h-[14px] cursor-pointer'/>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Sales