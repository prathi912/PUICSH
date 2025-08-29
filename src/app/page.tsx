import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { ImportantDates } from '@/components/sections/important-dates';
import { CallForPapers } from '@/components/sections/call-for-papers';
import { Speakers } from '@/components/sections/speakers';
import { Committee } from '@/components/sections/committee';
import { Program } from '@/components/sections/program';
import { Venue } from '@/components/sections/venue';
import { Sponsors } from '@/components/sections/sponsors';
import { Contact } from '@/components/sections/contact';
import { Faq } from '@/components/sections/faq';
import { TargetAudience } from '@/components/sections/target-audience';
import { Sessions } from '@/components/sections/sessions';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ImportantDates />
        <CallForPapers />
        <Speakers />
        <Committee />
        <Program />
        <TargetAudience />
        <Sessions />
        <Venue />
        <Sponsors />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
