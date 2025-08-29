import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function SubmissionGuidelines() {
  return (
    <section id="submission-guidelines" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Submission Guidelines</h2>
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
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <CardTitle>Publication</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">
                        All accepted and registered papers under this conference will be submitted to Springer, Lecture Notes in Electrical Engineering. Springer LNEE is now indexed by: ISI Proceedings, DBLP, Ulrich’s, EI Compendex, SCOPUS, Zentralblatt Math, MetaPress, Springerlink.
                    </p>
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

          <Alert>
            <FileText className="h-4 w-4" />
            <AlertTitle>Declaration</AlertTitle>
            <AlertDescription className="text-justify">
              The Microsoft CMT service is being used for managing the peer-reviewing process for this conference. This service is provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </AlertDescription>
          </Alert>

        </div>
      </div>
    </section>
  );
}
