import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileText, AlertTriangle } from "lucide-react";

const guidelines = [
  "You are advised to address the comments of the reviewers in your final paper suitably which are intended to help you to improve your paper for final publication.",
  "The corresponding author should be clearly indicated. Put a star mark on the mail id of corresponding author positively.",
  "Authors should not mention designation etc. in the name and affiliation part below the paper title. You are requested to mention only name, college/organization name and mail ids of all the authors compulsorily. However, they may mention acknowledgement if necessary (at the end of the paper-prior to references). Kindly mention full name of your institution and city name.",
  "Authors should not give any photo and biography at the end of the paper.",
  "Cite all figures and tables used in the body of the text. Check English sentences, grammars and spelling carefully. You are advised to take support from some expert on this if necessary.",
  "It is mandatory that the submitted manuscript is solely from the authors’ own work and not from the work of others (unless explicit permission for the same has been granted). This includes text, figures and tables. Information from published articles must always be cited explicitly. Proper citation is to give the credit to the work that is originally published (not to follow-up work or reviews).",
  "Citations should be given close to the information within the sentences or at the end of the sentence, not after several sentences or near the end of the paragraph. Even when citations are given, exact copying of a whole sentence or paragraphs should be indicated by quotation marks. Furthermore, reuse of part of a published figure or table requires a copyright permission from the publishers that hold the rights. All re-published figures and tables should explicitly indicate the original source.",
  "All references which are cited must be complete in terms of details like: Year of publication, Vol No, Issue No, pages, name of conference/journal etc. wherever required. All references listed in the end (under reference section of your paper ) must be cited in the body of the text.",
  "Please note that Springer will make a quality check of each final paper prior to sending it for production. If any issue of plagiarism is detected which is not within the Springer policy then the paper may be rejected even though authors might have registered. Neither the Editorial board nor the Organizing committee will be responsible in this case. Hence, we advise authors to carefully prepare their final paper. Plagiarism policy for springer is available in springerlink.",
  "Springer CRC formatting template is available on conference website.",
  "The version of this final CRC will be used for preparation of the conference schedule, souvenir and will be sent in proceedings to Springer. You are requested not to bother uploading this version on Microsoft CMT portal."
];

export function CrcInfo() {
  return (
    <section id="crc-info" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4 font-headline">Guidelines for Preparation of Camera Ready Copy (CRC)</h1>
          
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                <span>Preparation Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {guidelines.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2.5 mr-3"></div>
                    <span className="text-muted-foreground text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Alert variant="destructive" className="mt-12">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="font-bold">Important Point: Declaration</AlertTitle>
            <AlertDescription className="text-justify">
              Authors are strictly and strongly advised to mention following as <strong>DECLARATION</strong> before the Reference section if authors are using any non-benchmark images/data and not able to cite the source of these. “We have taken permission from competent authorities to use the images/data as given in the paper. In case of any dispute in the future, we shall be wholly responsible.”
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
