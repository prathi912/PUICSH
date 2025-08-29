import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SubmissionGuidelines } from '@/components/sections/submission-guidelines';

export default function SubmissionInfoPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <SubmissionGuidelines />
      </main>
      <Footer />
    </div>
  );
}
