import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, Mic, Users, FlaskConical, GraduationCap } from "lucide-react";

const sessionTypes = [
    { 
        icon: <Mic className="h-6 w-6 text-accent" />,
        title: "Keynote Lectures",
        description: "Renowned experts will deliver keynote addresses on the latest trends and future directions in sustainable health."
    },
    { 
        icon: <Presentation className="h-6 w-6 text-accent" />,
        title: "Plenary Sessions",
        description: "Comprehensive sessions focusing on major themes such as innovations, biomaterials, and global health challenges."
    },
    { 
        icon: <Users className="h-6 w-6 text-accent" />,
        title: "Panel Discussions",
        description: "Interactive panels featuring experts from academia, industry, and government discussing critical issues and potential solutions."
    },
    { 
        icon: <FlaskConical className="h-6 w-6 text-accent" />,
        title: "Technical Sessions",
        description: "Detailed presentations on specific research findings and technological advancements in sustainable health."
    },
    { 
        icon: <GraduationCap className="h-6 w-6 text-accent" />,
        title: "Oral and Poster Sessions",
        description: "Opportunities for researchers to present their work and engage with attendees in an informal setting."
    },
    { 
        icon: <Users className="h-6 w-6 text-accent" />,
        title: "Workshops and Tutorials",
        description: "Hands-on workshops and tutorials on emerging technologies and methodologies in sustainable health."
    },
     { 
        icon: <Users className="h-6 w-6 text-accent" />,
        title: "Young Researcher’s Meet",
        description: "For Ph.D. scholars/fresh doctorate, below 35 years of age to showcase their research work."
    },
]

export function Sessions() {
  return (
    <section id="sessions" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Conference Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessionTypes.map(session => (
                <Card key={session.title} className="text-center shadow-lg">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                            {session.icon}
                        </div>
                        <CardTitle>{session.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{session.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
