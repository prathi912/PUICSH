import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle className="justify-center mb-12">Privacy Policy</SectionTitle>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Introduction</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                        Welcome to the 1st International Conference on Sustainable Health. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and register for our conference. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Collection of Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                       We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register for the conference or when you choose to participate in various activities related to the Site.
                    </p>
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Use of Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to: create and manage your account, email you regarding your account or registration, process payments and refunds, and send you a newsletter.
                    </p>
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Security of Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                       We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}