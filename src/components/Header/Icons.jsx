import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Icons = () => {
    const [likeIcon, setLikeIcon] = useState(false);

    const handleLikeIcon = () => {
        return setLikeIcon((prev) => !prev);
    }

  return (
    <div className='flex items-center justify-between w-[80px]'>
        <div className='w-[32px] h-[32px] flex items-center justify-center'>
            {likeIcon ? <FaHeart className='w-[20px] h-[17.83px] cursor-pointer text-red-500' onClick={() => handleLikeIcon()}/> : <FaRegHeart className='w-[20px] h-[17.83px] cursor-pointer' onClick={() => handleLikeIcon()}/>}    
        </div>

        <div className='w-[32px] h-[32px] flex items-center justify-center'>
            <BsCart2 className='w-[20px] h-[17.83px]'/>
        </div>
      
        
    </div>
  )
}

export default Icons