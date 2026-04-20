import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown({ targetDate, label }: CountdownProps) {
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        setIsComplete(true);
        clearInterval(timer);
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (num: number) => String(num).padStart(2, "0");

  if (isComplete) {
    return (
      <div className="countdown">
        <h3>{label} is here! 🎉</h3>
      </div>
    );
  }

  return (
    <div className="countdown">
      <h3 className="countdown-title">⏰ {label} Countdown</h3>

      <div className="flip-container">
        <FlipUnit label="Days" value={format(time.days)} />
        <FlipUnit label="Hours" value={format(time.hours)} />
        <FlipUnit label="Minutes" value={format(time.minutes)} />
        <FlipUnit label="Seconds" value={format(time.seconds)} />
      </div>
    </div>
  );
}

function FlipUnit({ label, value }: { label: string; value: string }) {
  return (
    <div className="flip-unit">
      <div key={value} className="flip-card">
        {value}
      </div>
      <span className="flip-label">{label}</span>
    </div>
  );
}

export default Countdown;