import React from 'react'
import SideHero from './SideHero'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
  return (
    <main className='px-[135px] flex'>
        <SideHero />
        <div className='border h-[384px]'></div>
        <HeroCarousel />
    </main>
  )
}

export default Hero