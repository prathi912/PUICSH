import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Schedule } from '@/components/sections/schedule';
import { Speakers } from '@/components/sections/speakers';
import { AbstractSubmission } from '@/components/sections/abstract-submission';
import { MapSection } from '@/components/sections/map-section';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Schedule />
        <Speakers />
        <AbstractSubmission />
        <MapSection />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
