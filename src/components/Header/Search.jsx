import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import Icons from './Icons';

const Search = () => {
    const [search, setSearch] = useState('');

  return (
    <div className='flex items-center gap-3'>

        <div className='border w-[243px] px-[20px] py-[6px] flex justify-between items-center bg-[#F5F5F5]'>
            <input className='text-[12px] w-[153px] outline-none bg-inherit'
                type='search'
                placeholder='What are you looking for?'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className='h-[24px] w-[24px] flex justify-center items-center'>
                <RiSearchLine className='w-[16px] h-[16px]'/>
            </div>
        </div>
       

        <Icons />
    </div>
  )
}

export default Search