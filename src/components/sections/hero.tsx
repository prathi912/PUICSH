import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40">
       <Image 
        src="https://placehold.co/1920x1080.png" 
        alt="Conference background" 
        layout="fill"
        objectFit="cover"
        className="opacity-10"
        data-ai-hint="healthcare sustainability"
      />
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
            HealthCon 2025
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl md:text-2xl">
            Shaping a Sustainable Future for Global Health
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-md font-medium">
              <CalendarDays className="h-5 w-5 text-accent" />
              <span>24th - 25th January 2025</span>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-2 text-md font-medium">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Parul University, Vadodara, Gujarat</span>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Register Now</Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              Submit Paper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
