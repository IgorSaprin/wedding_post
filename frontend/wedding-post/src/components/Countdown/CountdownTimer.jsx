import { useState, useEffect } from "react";
import CountdownDisplay from "./CountdownDisplay";

const CountdownTimer = ({ weddingDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = { weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft.weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
      const diffRemaining =
        difference - timeLeft.weeks * 7 * 24 * 60 * 60 * 1000;

      timeLeft.days = Math.floor(diffRemaining / (1000 * 60 * 60 * 24));
      const remainingAfterDays =
        diffRemaining - timeLeft.days * 24 * 60 * 60 * 1000;

      timeLeft.hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
      const remainingAfterHours =
        remainingAfterDays - timeLeft.hours * 60 * 60 * 1000;

      timeLeft.minutes = Math.floor(remainingAfterHours / (1000 * 60));
      const remainingAfterMinutes =
        remainingAfterHours - timeLeft.minutes * 60 * 1000;

      timeLeft.seconds = Math.floor(remainingAfterMinutes / 1000);
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <>
      <CountdownDisplay timeLeft={timeLeft} />
    </>
  );
};

export default CountdownTimer;
