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
      <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-md">
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs">Days</div>
        </div>
      </div>
      <div className="mx-2 text-3xl font-bold">:</div>
      <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-md">
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs">Hours</div>
        </div>
      </div>
      <div className="mx-2 text-3xl font-bold">:</div>
      <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-md">
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs">Minutes</div>
        </div>
      </div>
      <div className="mx-2 text-3xl font-bold">:</div>
      <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-md">
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs">Seconds</div>
        </div>
      </div>
    </div>
  );
}
