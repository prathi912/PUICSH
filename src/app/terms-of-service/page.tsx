import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle className="justify-center mb-12">Terms of Service</SectionTitle>
           <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Agreement to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and the conference organizers (“we,” “us” or “our”), concerning your access to and use of the conference website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                    </p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>User Representations</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                      By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise.
                    </p>
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Prohibited Activities</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                       You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Systematic retrieval of data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us is prohibited.
                    </p>
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Modifications and Interruptions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                       We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
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