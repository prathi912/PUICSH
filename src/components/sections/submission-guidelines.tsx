import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Presentation } from "lucide-react";

const abstractGuidelines = [
  "Submission of abstract should be in Word Document only.",
  "Word Limit: 250-500 words.",
  "At-least one of the authors is expected to present at the Conference for Accepted Research Papers.",
  "Corresponding author's name should be designated with an asterisk and the presenting author name should be underlined.",
];

const paperFormat = [
    "Single Column, A4 Size, 1.5-line spacing.",
    "Font Style & Size: Times New Roman-Heading (size 14), Content (size 12).",
    "Attach Plagiarism Report & Similarity Index of not more than 10%.",
    "The manuscripts will undergo double-blind peer review process.",
    "Content Order for full complete manuscript: Title, Authors Details, Abstract, Keywords, Introduction, Review of Literature, Research Objectives, Research Methodology, Analysis & Discussions, Conclusion, References."
];

const posterGuidelines = [
  "The topic should be relevant to the thrust area.",
  "Posters should be prepared in PORTRAIT format and with presentation text in English.",
  "The title of the poster should cover the full width of the poster; bold letter Times New Roman and font size 14 should be used. Letters must be readable from a distance of 3 feet.",
  "The name(s) of the author(s), address (es) should be written below the title in small letters.",
  "Figures and diagrams must be simple and self-explanatory.",
  "Corresponding authors will be notified about the day, time, and venue for the display. The presenting author must be present during the display of the poster.",
  "One author can present only one poster.",
  "Abstracts not complying with any of the above conditions will not be accepted.",
  "The time given to present the poster will be 5 minutes and 2 minutes for a question answer session.",
];

const oralGuidelines = [
  "The topic should be relevant to the thrust area.",
  "The topic presented by the presenting author should be their research work.",
  "Abstracts not complying with any of the above conditions will not be accepted.",
  "The time given to present the poster will be 8 minutes and 2 minutes for a question session.",
];

export function SubmissionGuidelines() {
  return (
    <section id="submission-guidelines" className="py-16 md:py-24 transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Submission Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                <span>Abstract & Paper Format</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold mb-2">Abstract Submission</h4>
                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {abstractGuidelines.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Full Paper Format</h4>
                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {paperFormat.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </CardContent>
          </Card>

          <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="h-6 w-6 text-primary" />
                <span>Presentation Instructions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div>
                    <h4 className="font-semibold mb-2">Poster Presentation</h4>
                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {posterGuidelines.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Oral Presentation</h4>
                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {oralGuidelines.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
