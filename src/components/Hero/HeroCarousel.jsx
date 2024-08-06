import React, { useState, useEffect } from 'react'
import slides from '../../data/CarouselData';
import { IoLogoApple } from "react-icons/io5";
import { HiOutlineArrowRight } from "react-icons/hi";

const HeroCarousel = () => {
    // State to store the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 20 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [slides.length]);

  // Function to handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
    
    return (
        <div className="carousel-container mt-[40px] ml-[40px]">
            {slides.map((slide, index) => (
                <div key={slide.id} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <div className="carousel-content">
                        <div className='flex items-center gap-5 w-[190px]'>
                            <IoLogoApple className='w-[40px] h-[49px] text-white'/>
                            <h2 className='text-[16px] text-[#FAFAFA]'>{slide.title}</h2>
                        </div>
                      
                        <div className='w-[294px]'>
                            <p className='text-[40px] font-semibold'>{slide.description}</p>
                        </div>

                        <div className='mt-3 flex items-center gap-2'>
                            <p className='text-[16px] font-medium underline underline-offset-8 cursor-pointer'>Shop Now</p>
                            <HiOutlineArrowRight className='w-[16.5px] h-[14px]'/>
                        </div>

                       
                    </div>

                    <div className='transform translate-x-[200px] w-[496px]'>
                        <img src={slide.imageUrl}/>
                    </div>
                </div>
            ))}
  
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
      </div>
    );
};


export default HeroCarousel