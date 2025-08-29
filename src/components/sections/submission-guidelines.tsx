import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, MicVocal, Presentation, BookOpenCheck } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SectionTitle } from "@/components/ui/section-title";

const posterInstructions = [
  "The topic should be relevant to the thrust area.",
  "Posters should be prepared in PORTRAIT format and with presentation text in English.",
  "The title of the poster should cover the full width of the poster; bold letter Times New Roman and font size 14 should be used. Letters must be readable from a distance of 3 feet.",
  "The name(s) of the author(s), address (es) should be written below the title in small letters.",
  "Figures and diagrams must be simple and self-explanatory.",
  "Corresponding authors will be notified about the day, time, and venue for the display. The presenting author must be present during the display of the poster.",
  "One author can present only one poster.",
  "Abstracts not complying with any of the above conditions will not be accepted.",
  "The time given to present the poster will be 5 minutes and 2 minutes for a question answer session."
];

const oralInstructions = [
  "The topic should be relevant to the thrust area.",
  "The topic presented by the presenting author should be their research work.",
  "Abstracts not complying with any of the above conditions will not be accepted.",
  "The time given to present the poster will be 8 minutes and 2 minutes for a question session."
];

const publicationOpportunities = [
    {
      main: "Conference Proceedings (Scopus indexed)",
      subItems: [
        "E3S Web of conference",
        "AIP Conference Proceedings",
        "IOP Conference Proceedings",
      ]
    },
    {
        main: "Articles in special issues in journals (Scopus indexed) and selected Springer Journal"
    },
    {
        main: "Books chapters in reputed publications (Scopus indexed)"
    }
];

export function SubmissionGuidelines() {
  return (
    <section id="submission-guidelines" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle className="justify-center mb-12">Submission Guidelines</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-8">
            <CardHeader>
              <CardTitle>Paper Submission</CardTitle>
              <CardDescription>
                Paper Submission has to be made through Microsoft CMT using the following link.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="#" target="_blank">
                  Submit via Microsoft CMT <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
             <Card className="text-left shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                      <BookOpenCheck className="h-6 w-6 text-primary" />
                      <span>Publication Opportunities</span>
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3">
                      {publicationOpportunities.map((opportunity, index) => (
                          <li key={index}>
                              <div className="flex items-start">
                                 <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                                <span>{opportunity.main}</span>
                              </div>
                              {opportunity.subItems && (
                                <ul className="ml-8 mt-2 space-y-2 list-disc list-inside">
                                    {opportunity.subItems.map((sub, subIndex) => (
                                        <li key={subIndex}>{sub}</li>
                                    ))}
                                </ul>
                              )}
                          </li>
                      ))}
                  </ul>
              </CardContent>
          </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <CardTitle>Formatting</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify mb-4">All submissions must comply with the Springer LNEE format. Paper should not be less than 12 pages (with regular registration fees).</p>
                    <div className="flex gap-4">
                        <Button variant="outline" asChild>
                            <Link href="#">
                                <Download className="mr-2 h-4 w-4" /> LaTeX Template
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="#">
                                <Download className="mr-2 h-4 w-4" /> Word Template
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 mb-8">
             <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Presentation className="h-6 w-6 text-primary" />
                        <span>Instructions for Poster Presentation</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                      {posterInstructions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2.5 mr-3"></div>
                          <span className="text-muted-foreground text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MicVocal className="h-6 w-6 text-primary" />
                        <span>Instructions for Oral Presentation</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-3">
                      {oralInstructions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2.5 mr-3"></div>
                          <span className="text-muted-foreground text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                </CardContent>
            </Card>
          </div>

          <Alert>
            <FileText className="h-4 w-4" />
            <AlertTitle>Declaration</AlertTitle>
            <AlertDescription className="text-justify">
              The Microsoft CMT service is being used for managing the peer-reviewing process for this conference. This service is provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </AlertDescription>
          </Alert>

          <Alert className="mt-8">
            <FileText className="h-4 w-4" />
            <AlertTitle>Plagiarism</AlertTitle>
            <AlertDescription className="text-justify">
              All papers submitted to the conference will be checked for plagiarism. If plagiarism is detected, the paper will be rejected. The organizing committee's decision is final.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
