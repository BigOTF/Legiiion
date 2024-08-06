import React from 'react'

const Nav = () => {
  return (
    <nav>
        <ul className='flex items-center justify-between w-[367px]'>
            <li>
                <a className='text-[16px] cursor-pointer hover:underline hover:underline-offset-8'>Home</a>
            </li>
            <li>
                <a className='text-[16px] cursor-pointer hover:underline hover:underline-offset-8'>Contact</a>
            </li>
            <li>
                <a className='text-[16px] cursor-pointer hover:underline hover:underline-offset-8'>About</a>
            </li>
            <li>
                <a className='text-[16px] cursor-pointer hover:underline hover:underline-offset-8'>Sign Up</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav