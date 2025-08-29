"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {

  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-19T09:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as {days: number, hours: number, minutes: number, seconds: number};
  };

  const [timeLeft, setTimeLeft] = useState<{days?: number, hours?: number, minutes?: number, seconds?: number}>({});

  useEffect(() => {
    // Set initial time on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents: any[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    if(value !== undefined) {
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center p-2 min-w-[60px]">
          <span className="text-3xl md:text-4xl font-bold">{value}</span>
          <span className="text-xs uppercase">{interval}</span>
        </div>
      );
    }
  });

  return (
    <section id="home" className="relative w-full py-10 md:py-32 lg:py-25">
       <Image 
        src="https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/laxmi-vilas-palace/Laxmi-Vilas-Palace-Thumbnail.jpg" 
        alt="Laxmi Vilas Palace" 
        fill
        objectFit="cover"
        className="opacity-10"
        data-ai-hint="indian palace"
      />
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
          1st International Conference on Sustainable Health
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl md:text-2xl">
            Innovation, Advances, & Challenges-2025
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-md font-medium">
              <CalendarDays className="h-5 w-5 text-accent" />
              <span>19th - 20th December 2025</span>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-2 text-md font-medium">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Parul University, Vadodara, Gujarat</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-110"><Link href="#registration">Register Now</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-transform duration-300 hover:scale-110">
              <Link href="#papers">Submit Paper</Link></Button>
          </div>
           {timerComponents.length > 0 ? (
            <div className="mt-12">
              <div className="inline-flex items-center justify-center flex-wrap gap-2 md:gap-8 rounded-lg bg-card/80 p-4 md:p-6 backdrop-blur-sm">
                {timerComponents}
              </div>
            </div>
          ) : (
            <div className="mt-12 text-2xl font-bold">Conference is live!</div>
          )}
        </div>
      </div>
    </section>
  );
}
