"use client";

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  eventName?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate, eventName }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, mounted]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="bg-card border-2 border-border rounded-lg p-4 mb-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">--</div>
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Loading</div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="w-full">
      {eventName && (
        <h3 className="text-center text-xl md:text-2xl font-headline uppercase tracking-wider text-foreground mb-6">
          {eventName} <span className="text-primary">Countdown</span>
        </h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="text-center group">
            <div className="bg-card border-2 border-primary/30 rounded-lg p-4 md:p-6 mb-2 transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] cage-pattern-subtle">
              <div className="text-4xl md:text-6xl font-bold font-headline text-primary combat-shadow tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
