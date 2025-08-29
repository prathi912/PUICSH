import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BedDouble, Building, Star } from 'lucide-react';

const accommodations = [
  {
    name: "Hotel Grand Mercure",
    type: "5-Star Hotel",
    description: "A luxurious option with premium amenities, ideal for a comfortable and relaxing stay.",
    icon: <Star className="h-5 w-5 text-accent" />
  },
  {
    name: "Welcomhotel by ITC Hotels",
    type: "Luxury Hotel",
    description: "Known for its excellent service and elegant rooms, offering a top-tier experience.",
    icon: <Star className="h-5 w-5 text-accent" />
  },
  {
    name: "Sayaji Hotel Vadodara",
    type: "Business Hotel",
    description: "A popular choice for business travelers, combining comfort with convenience.",
    icon: <Building className="h-5 w-5 text-accent" />
  },
  {
    name: "University Guest House",
    type: "On-Campus",
    description: "Conveniently located on the Parul University campus, offering easy access to the conference venue.",
    icon: <BedDouble className="h-5 w-5 text-accent" />
  },
];

export default function AccommodationPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-center mb-12 font-headline">Accommodation</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground mb-8 text-justify">
              Vadodara offers a range of accommodation options to suit every budget and preference. We have negotiated special rates with several nearby hotels for conference attendees. Please mention the conference when booking to avail the discount. The conference is non-residential and delegates are kindly requested to make their own arrangement for accommodation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accommodations.map((item) => (
                <Card key={item.name} className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                      <div>
                        <CardTitle>{item.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-justify">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <p className="text-center text-muted-foreground mt-12">
              For any assistance with accommodation, feel free to e-mail the organizing team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}