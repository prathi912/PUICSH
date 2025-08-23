import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const speakers = [
  {
    name: "Dr. Evelyn Reed",
    title: "Chief of Medicine, HealthForward Institute",
    bio: "Dr. Reed is a pioneer in sustainable healthcare solutions and AI-driven diagnostics. Her work focuses on creating accessible health tech for underserved communities.",
    img: "https://placehold.co/400x400.png",
    hint: "professional portrait woman"
  },
  {
    name: "Dr. Ben Carter",
    title: "Head of Research, BioGen Innovations",
    bio: "With over 20 years of experience in genetic engineering, Dr. Carter is leading the charge in developing next-generation therapies for chronic diseases.",
    img: "https://placehold.co/400x400.png",
    hint: "professional portrait man"
  },
  {
    name: "Dr. Sofia Khan",
    title: "Professor of Global Health, University of Worldview",
    bio: "Dr. Khan's research addresses health disparities and policy-making on a global scale. She has worked with international organizations to improve health outcomes.",
    img: "https://placehold.co/400x400.png",
    hint: "professional portrait person"
  },
];

export function Speakers() {
  return (
    <section id="speakers" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image
                  src={speaker.img}
                  alt={speaker.name}
                  width={400}
                  height={400}
                  className="w-full h-auto aspect-square object-cover"
                  data-ai-hint={speaker.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-primary">{speaker.name}</CardTitle>
                <CardDescription className="text-accent font-medium mt-1">{speaker.title}</CardDescription>
                <p className="mt-4 text-sm text-muted-foreground">{speaker.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
