import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const Page = () => {
  return (
    <section className='h-[48px] pr-[150px] bg-black text-white py-[12px] flex justify-between items-center'>
        <div></div>

        <div className='flex items-center justify-between gap-2'>
            <p className='text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <p className='font-semibold text-[14px] cursor-pointer'>ShopNow</p>
        </div>

        <div className='flex items-center'>
            <p className='text-[14px]'>English</p>
            <div className='w-[24px] h-[24px] flex items-center justify-center'>
                <FaAngleDown className='w-[7.78px] h-[12.73px] cursor-pointer'/>
            </div>
           
        </div>
    </section>
  )
}

export default Page