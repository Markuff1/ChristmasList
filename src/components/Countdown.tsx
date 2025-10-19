import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  label?: string;
}

function Countdown({ targetDate, label }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft(`${label || "Event"} is here! 🎉`);
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, label]);

  return (
    <div className="countdown">
      <h3>⏰ Countdown to {label}</h3>
      <p>{timeLeft}</p>
    </div>
  );
}

export default Countdown;
