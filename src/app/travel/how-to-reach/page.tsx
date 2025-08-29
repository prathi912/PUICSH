import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Train, Car } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';

const travelOptions = [
    {
        mode: "By Air",
        details: "Vadodara Airport (BDQ) is the nearest airport, located approximately 25 km from Parul University. It is well-connected with major cities like Mumbai and Delhi. Taxis and app-based cab services are readily available from the airport.",
        icon: <Plane className="h-8 w-8 text-primary" />
    },
    {
        mode: "By Train",
        details: "Vadodara Junction (BRC) is the main railway station, about 20 km from the university. It is a major stop on the Western Railway network, with excellent connectivity to all parts of India. You can hire a taxi or an auto-rickshaw from the station.",
        icon: <Train className="h-8 w-8 text-primary" />
    },
    {
        mode: "By Road",
        details: "Vadodara is well-connected by a network of state and national highways. The university is located on the Vadodara-Waghodia Road. Regular bus services are available from the city's central bus terminal. If driving, you can use GPS for directions to Parul University, Waghodia.",
        icon: <Car className="h-8 w-8 text-primary" />
    },
]

export default function HowToReachPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle className="justify-center mb-12">How to Reach</SectionTitle>
          <div className="max-w-4xl mx-auto">
             <div className="grid grid-cols-1 gap-8">
                {travelOptions.map((option) => (
                    <Card key={option.mode} className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader className="flex flex-row items-center gap-4">
                            {option.icon}
                            <CardTitle className="text-2xl">{option.mode}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-justify">{option.details}</p>
                        </CardContent>
                    </Card>
                ))}
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
