import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const nationalSpeakers = [
  { name: "Prof. Alok Dhawan", affiliation: "Director, Centre of Biomedical Research, SGPGI, Lucknow" },
  { name: "Prof. Neeraj Sinha", affiliation: "Professor, Centre for Biomedical Research, SGPGI, Lucknow" },
  { name: "Prof. Ashok Kumar", affiliation: "IIT Kanpur" },
  { name: "Dr. Yogesh Shouche", affiliation: "NCCS Pune" },
  { name: "Dr. Javed Agarewala", affiliation: "IIT Ropar" },
  { name: "Dr. Anup Anvikar", affiliation: "Scientist G & Director, ICMR-NIMR, Delhi" },
  { name: "Dr. Manisha Madkaikar", affiliation: "Scientist G & Director, ICMR-NIIH, Mumbai" },
  { name: "Dr. Chhama Awasthi", affiliation: "Scientist D, WISE-KIRAN Division, DST, Govt. of India" },
  { name: "Dr. Ravishankar Ramachandran", affiliation: "Chief Scientist, CSIR-CDRI, Lucknow" },
  { name: "Prof. Yogesh Bhargava", affiliation: "Department of Microbiology, Central University of Sagar, MP" },
  { name: "Dr. Dhiraj Bhatia", affiliation: "IIT Gandhinagar" },
  { name: "Prof. Biman B. Mondal", affiliation: "Professor & Associate Dean, IIT Guwahati" },
  { name: "Dr. Sarmistha Banerjee", affiliation: "Professor, Dept of Biochemistry, University of Hyderabad" },
  { name: "Dr. Rahul Shukla", affiliation: "NIPER Raibareilly" },
  { name: "Prof. P Balram", affiliation: "IISC Bangalore" },
  { name: "Health minister/Director of IIT Gandhinagar/ NIPER Ahmedabad/ICMR-NIOH Ahmedabad", affiliation: "" },
];

const internationalSpeakers = [
  { name: "Prof. Bonglee Kim", affiliation: "Kyung Hee University", email: "bongleekim@khu.ac.kr" },
  { name: "Dr. Ram Prasad", affiliation: "University of Alabama, USA" },
  { name: "Dr. Farrukh Aqil", affiliation: "University of Louisville USA" },
  { name: "Prof. Debashis Bagichi", affiliation: "Texas Southern University, USA" },
  { name: "Dr. Deena Elsori", affiliation: "Associate Professor and Academic Advisor at Rabdan Academy, Abu Dhabi" },
];

export function Speakers() {
  const SpeakerCard = ({ speaker }: { speaker: { name: string, affiliation: string, email?: string } }) => (
    <Card className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{speaker.name}</CardTitle>
        <CardDescription className="text-accent font-medium mt-1">{speaker.affiliation}</CardDescription>
      </CardHeader>
      {speaker.email && 
        <CardContent>
          <a href={`mailto:${speaker.email}`} className="text-sm text-muted-foreground hover:underline">{speaker.email}</a>
        </CardContent>
      }
    </Card>
  )

  return (
    <section id="speakers" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Keynote Speakers</h2>
        <Tabs defaultValue="national" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="national">National Speakers</TabsTrigger>
            <TabsTrigger value="international">International Speakers</TabsTrigger>
          </TabsList>
          <TabsContent value="national" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nationalSpeakers.map((speaker, index) => (
                <SpeakerCard key={index} speaker={speaker} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="international" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalSpeakers.map((speaker, index) => (
                <SpeakerCard key={index} speaker={speaker} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
