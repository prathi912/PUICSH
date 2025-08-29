import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FileText, AlertTriangle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';

export default function VisaPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionTitle className="justify-center mb-12">Visa Information</SectionTitle>

            <Card className="mb-8 shadow-lg">
                <CardHeader>
                    <CardTitle>General Information</CardTitle>
                    <CardDescription>For International Participants</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                        All foreign nationals entering India are required to possess a valid international travel document in the form of a national passport with a valid visa obtained from an Indian Mission or Post abroad. It is the responsibility of the participant to ensure they have a valid visa to enter India.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
                <CardHeader>
                    <CardTitle>Types of Visas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold">Conference Visa (Recommended)</h4>
                        <p className="text-muted-foreground text-justify">
                            A Conference Visa is granted to a foreigner whose sole objective of visiting India is to attend an international conference, seminar or workshop. Please ensure you provide the official letter of invitation from the conference organizers when applying.
                        </p>
                    </div>
                     <div>
                        <h4 className="font-semibold">e-Visa for Conference</h4>
                        <p className="text-muted-foreground text-justify">
                            Delegates from certain countries may be eligible for an e-Visa. Please check the official Government of India website for e-Visa eligibility and application procedures. This is often the fastest and easiest way to obtain a visa.
                        </p>
                    </div>
                </CardContent>
            </Card>

             <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle>Invitation Letter</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify mb-4">
                        A formal invitation letter will be provided to all registered international participants to assist with their visa application. Please complete your registration to receive the letter. If you require a letter before registration for funding purposes, please contact the conference secretariat.
                    </p>
                     <Button variant="secondary" asChild>
                        <Link href="#contact">Request Invitation Letter</Link>
                    </Button>
                </CardContent>
            </Card>

            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle className="font-bold">Disclaimer</AlertTitle>
                <AlertDescription className="text-justify">
                    Visa regulations are subject to change. Please consult the nearest Indian Embassy or Consulate in your country for the most current information. The conference organizers are not responsible for visa-related issues and cannot intervene on behalf of participants.
                </AlertDescription>
            </Alert>
             <div className="text-center mt-8">
                 <Button asChild>
                    <Link href="https://indianvisaonline.gov.in/" target="_blank">
                        Apply for Indian Visa Online <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
