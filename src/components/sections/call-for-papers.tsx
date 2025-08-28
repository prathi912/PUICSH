"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, BookOpenCheck } from "lucide-react";

const conferenceTracks = [
    "Innovations in Sustainable Health Technologies",
    "Advances in Functional Biomaterials",
    "Sustainable Health Practices and Policies",
    "Environmental Impact on Health",
    "Nanotechnology in Sustainable Health",
    "Early detection diagnostic tools",
    "AI/ML and IoT in health",
    "Biodegradable and Eco-friendly Biomaterials",
    "Renewable Energy Solutions for Health Systems",
    "Public Health and Sustainability",
    "Challenges in Global Health Sustainability",
    "Future Directions in Sustainable Health Research",
];

const publicationOpportunities = [
    "Conference Proceedings (Scopus indexed)",
    "E3S Web of conference",
    "AIP Conference Proceedings",
    "IOP Conference Proceedings",
    "Articles in special issues in journals (Scopus indexed) and selected Springer Journal",
    "Books chapters in reputed publications (Scopus indexed)",
]

export function CallForPapers() {
  return (
    <section id="papers" className="py-16 md:py-24 bg-card transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Call for Papers</h2>
          <p className="text-muted-foreground mb-8">
            Researchers are invited to submit original papers/ review papers on the following topics/themes. Submissions will be peer-reviewed, and selected accepted papers will be published in the Scopus indexed journals/conference proceedings.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="text-left shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 p-6 pb-0">
                      <ListChecks className="h-6 w-6 text-primary" />
                      <span>Conference Themes / Tracks</span>
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 p-6 pt-4">
                      {conferenceTracks.map((track) => (
                          <li key={track} className="flex items-start">
                               <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2.5 mr-3"></div>
                              <span>{track}</span>
                          </li>
                      ))}
                  </ul>
              </CardContent>
          </Card>
           <Card className="text-left shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 p-6 pb-0">
                      <BookOpenCheck className="h-6 w-6 text-primary" />
                      <span>Publication Opportunities</span>
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3 p-6 pt-4">
                      {publicationOpportunities.map((opportunity) => (
                          <li key={opportunity} className="flex items-start">
                               <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2.5 mr-3"></div>
                              <span>{opportunity}</span>
                          </li>
                      ))}
                  </ul>
              </CardContent>
          </Card>
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-transform duration-300 hover:scale-110">
                <Link href="#submission-guidelines">View Submission Guidelines</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
