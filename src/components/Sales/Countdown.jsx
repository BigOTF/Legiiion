import React, { useState, useEffect } from 'react';
import { HiDotsVertical } from "react-icons/hi";

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateTimeRemaining() {
    const totalSeconds = Math.floor((new Date(targetDate) - new Date()) / 1000);

    if (totalSeconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex items-center justify-between w-[302px]">

      <div className="flex flex-col items-center">
        <span className="text-[12px] font-medium">Days</span>
        <span className="text-[32px] font-bold">{timeRemaining.days}</span>
      </div>

      <div><HiDotsVertical className='text-[#E07575] mt-5' /></div>

      <div className="flex flex-col items-center">
        <span className="text-[12px] font-medium">Hours</span>
        <span className="text-[32px] font-bold">{timeRemaining.hours}</span>
      </div>

      <div><HiDotsVertical className='text-[#E07575] mt-5' /></div>

      <div className="flex flex-col items-center">
        <span className="text-[12px] font-medium">Minutes</span>
        <span className="text-[32px] font-bold">{timeRemaining.minutes}</span>
      </div>

      <div><HiDotsVertical className='text-[#E07575] mt-5' /></div>

      <div className="flex flex-col items-center">
        <span className="text-[12px] font-medium">Seconds</span>
        <span className="text-[32px] font-bold">{timeRemaining.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;