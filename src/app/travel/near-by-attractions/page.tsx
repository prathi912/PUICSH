import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const attractions = [
  {
    name: "Laxmi Vilas Palace",
    description: "An extravagant palace built by the Gaekwad family, a prominent Maratha family, who ruled the Baroda State.",
    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/laxmi-vilas-palace/Laxmi-Vilas-Palace-Thumbnail.jpg",
    hint: "indian palace",
  },
  {
    name: "Sayaji Baug",
    description: "A large garden in Vadodara, also known as Kamati Baug, which houses a museum, a zoo, and a planetarium.",
    image: "https://picsum.photos/600/400",
    hint: "garden park",
  },
  {
    name: "Champaner-Pavagadh Archaeological Park",
    description: "A UNESCO World Heritage Site, this park is home to historical and archaeological treasures from the 8th to 14th centuries.",
    image: "https://picsum.photos/600/400",
    hint: "ancient ruins",
  },
  {
    name: "Statue of Unity",
    description: "The world's tallest statue, dedicated to Indian statesman and founding father Sardar Vallabhbhai Patel. It's a couple of hours drive from Vadodara.",
    image: "https://picsum.photos/600/400",
    hint: "tall statue",
  },
];

export default function NearbyAttractionsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-center mb-4 font-headline">Nearby Attractions</h1>
          <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12 text-justify">
            Explore the rich cultural heritage and scenic beauty of Vadodara and its surroundings during your visit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {attractions.map((attraction) => (
              <Card key={attraction.name} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={attraction.hint}
                />
                <CardHeader>
                  <CardTitle>{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-justify">{attraction.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}