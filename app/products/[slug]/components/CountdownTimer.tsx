'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const targetDate = new Date('2024-04-26T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      <div className="dhms-container">
        <div className="text-center dhms">
          <div>{timeLeft.days}</div>
          <div>D</div>
        </div>
      </div>
      <div className="dhms-dot">:</div>
      <div className="dhms-container">
        <div className="text-center dhms">
          <div>{timeLeft.hours}</div>
          <div>H</div>
        </div>
      </div>
      <div className="dhms-dot">:</div>
      <div className="dhms-container">
        <div className="text-center dhms">
          <div>{timeLeft.minutes}</div>
          <div>M</div>
        </div>
      </div>
      <div className="dhms-dot">:</div>
      <div className="dhms-container">
        <div className="text-center dhms">
          <div>{timeLeft.seconds}</div>
          <div>S</div>
        </div>
      </div>
    </div>
  )
}