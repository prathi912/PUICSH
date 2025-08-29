import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CrcInfo } from '@/components/sections/crc-info';

export default function CrcInfoPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <CrcInfo />
      </main>
      <Footer />
    </div>
  );
}
