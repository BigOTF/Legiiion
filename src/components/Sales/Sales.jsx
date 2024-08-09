import React, { useState, useEffect } from 'react'
import CountdownTimer from './Countdown';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import StarRating from './StarRating';
import { FaStar } from "react-icons/fa";
/* https://api.escuelajs.co/api/v1/products */
/* https://fakestoreapi.com/products */

const Sales = () => {
    const [product, setProduct] = useState([]);
    const targetDate = '2024-08-15T00:00:00';

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
        (async() => await fetchItems())();
    }, []);

    const StarData = () => {
        return (
            [...Array(5)].map((star) => {
                return <FaStar className='w-[20px] h-[20px] text-[#FFAD33]'/>
            })
        )
    }

    const ProductData = () => {
        return  product.map((data) => {
            return (
                <div key={data.id} className='border w-[270px] h-[350px]'>
                    <div className='w-[270px] h-[230px] bg-[#F5F5F5] flex items-center justify-center'>
                        <img src={data.image} className='h-[180px] w-[190px] bg-[#F5F5F5]'/>
                    </div>     

                    <div className='flex flex-col h-[104px] w-[201px] mt-4 gap-1'>
                        <p className='text-[16px] font-medium'>{data.title}</p>
                        <p className='text-[#DB4444] text-[16px] font-medium'>{`$`}{data.price}</p>
                    </div>
                </div>
            )
        })
    }

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

        <div className='mt-10 flex items-center gap-5'>
            <ProductData />
        </div>
    </section>
  )
}

export default Sales