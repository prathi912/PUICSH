import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Registration } from '@/components/sections/registration';
import { RegistrationInfo } from '@/components/sections/registration-info';

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Registration />
        <RegistrationInfo />
      </main>
      <Footer />
    </div>
  );
}
