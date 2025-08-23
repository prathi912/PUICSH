"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

const conferenceTracks = [
    "AI and Machine Learning in Healthcare",
    "Sustainable Medical Technologies",
    "Global Health Policy and Equity",
    "Telemedicine and Digital Health",
    "Pharmaceutical Innovations and Sustainability",
    "Climate Change and Public Health",
];

export function CallForPapers() {
  return (
    <section id="papers" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Call for Papers</h2>
          <p className="text-muted-foreground mb-8">
            We invite researchers, practitioners, and policymakers to submit abstracts and full papers on the following themes and tracks. Share your work with a global community of experts.
          </p>
          <Card className="text-left shadow-lg">
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

          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90">
            <Link href="#abstracts">Submit Your Paper</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
