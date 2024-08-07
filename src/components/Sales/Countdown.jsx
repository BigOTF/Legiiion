import React, { useState, useEffect } from 'react';

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
    <div className="countdown-timer">
      <div className="time">
        <span className="time-value">{timeRemaining.days}</span>
        <span className="time-label">Days</span>
      </div>
      <div className="time">
        <span className="time-value">{timeRemaining.hours}</span>
        <span className="time-label">Hours</span>
      </div>
      <div className="time">
        <span className="time-value">{timeRemaining.minutes}</span>
        <span className="time-label">Minutes</span>
      </div>
      <div className="time">
        <span className="time-value">{timeRemaining.seconds}</span>
        <span className="time-label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;