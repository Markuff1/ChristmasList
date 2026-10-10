import { useEffect, useState } from "react";
import { getNextOccurrence, isEventToday } from "../utils/eventDate";

interface CountdownProps {
  eventMonth: number;
  eventDay: number;
  label: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Countdown({ eventMonth, eventDay, label }: CountdownProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isToday = isEventToday(eventMonth, eventDay, now);
  const target = getNextOccurrence(eventMonth, eventDay, now);
  const time = getTimeLeft(target);

  const format = (num: number) => String(num).padStart(2, "0");

  if (isToday) {
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
