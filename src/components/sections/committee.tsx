import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const conferenceChairs = [
  {
    name: "Dr. Anjali Verma",
    title: "Conference Chair",
    affiliation: "Parul University",
    img: "https://placehold.co/400x400.png",
    hint: "professional portrait woman"
  },
  {
    name: "Dr. Raj Patel",
    title: "Conference Co-Chair",
    affiliation: "Gujarat Medical Council",
    img: "https://placehold.co/400x400.png",
    hint: "professional portrait man"
  },
];

const organizingCommittee = [
  { name: "Dr. Priya Sharma", affiliation: "Apollo Hospitals" },
  { name: "Mr. Sameer Shah", affiliation: "Zydus Cadila" },
  { name: "Dr. Fatima Ahmed", affiliation: "AIIMS Delhi" },
  { name: "Prof. Nihar Mehta", affiliation: "IIM Ahmedabad" },
  { name: "Dr. Chen Liu", affiliation: "Global Health Council" },
  { name: "Ms. Aisha Khan", affiliation: "Ministry of Health" },
];

const advisoryCommittee = [
    { name: "Prof. Emeritus John Doe", affiliation: "Harvard University" },
    { name: "Dr. Jane Smith", affiliation: "World Health Organization" },
    { name: "Sir Michael Evans", affiliation: "Oxford University" },
    { name: "Dr. Haruki Tanaka", affiliation: "University of Tokyo" },
]

export function Committee() {
  return (
    <section id="committee" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Conference Committee</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {conferenceChairs.map((chair, index) => (
            <Card key={index} className="flex flex-col sm:flex-row items-center gap-6 p-6">
              <Image
                src={chair.img}
                alt={chair.name}
                width={120}
                height={120}
                className="rounded-full flex-shrink-0"
                data-ai-hint={chair.hint}
              />
              <div className="text-center sm:text-left">
                <CardTitle className="text-xl font-bold text-primary">{chair.name}</CardTitle>
                <CardDescription className="text-accent font-medium mt-1">{chair.title}</CardDescription>
                <p className="mt-2 text-sm text-muted-foreground">{chair.affiliation}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <Tabs defaultValue="organizing" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="organizing">Organizing Committee</TabsTrigger>
            <TabsTrigger value="advisory">Advisory Committee</TabsTrigger>
          </TabsList>
          <TabsContent value="organizing" className="mt-6">
            <Card>
                <CardContent className="p-6">
                     <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                        {organizingCommittee.map((member) => (
                            <li key={member.name}>
                                <h4 className="font-semibold">{member.name}</h4>
                                <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                            </li>
                        ))}
                     </ul>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="advisory" className="mt-6">
            <Card>
                <CardContent className="p-6">
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                        {advisoryCommittee.map((member) => (
                            <li key={member.name}>
                                <h4 className="font-semibold">{member.name}</h4>
                                <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
