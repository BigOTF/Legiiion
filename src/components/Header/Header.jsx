import React from 'react'
import Nav from './Nav'
import Search from './Search'

const Header = () => {
  return (
    <section>

        <header className='px-[135px] mt-[30px] mb-[20px] h-[38px] flex justify-between items-center'>
            <h1 className='text-[24px] font-bold text-black'>Legiion</h1>

            <Nav />
            <Search />

        </header>

        <hr />
    </section>
  
  )
}

export default Header