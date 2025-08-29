import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const instructions = [
    "Each paper must be at least registered by one author for presentation in the conference getting it published in Springer.",
    "Registration fee for each category has been defined in the above table. Registration fee can be paid by online payment transfer through the payment gateway provided. The conference registration process is handled by Newgen Research Consultancy. For registration, sharing card details will not be accepted via email.",
    "Additional Paper Registration and Co-author registration applies as mentioned in table above.",
    "Extra page length charges would be applicable beyond 12 pages strictly. You have to make a combined fund transfer in such a case (i.e. Normal Registration + Extra Page Charges).",
    "Kindly pay the conference registration fee online through the given link below.",
    "Paper has to be presented in the conference virtually (online) or physically (offline) based on the selected mode by the presenter and paying the applicable registration fee.",
    "In case of any additional or error payments made by the candidate, refunds could be processed in not less than ten working days.",
    "Kindly take a snapshot of the payment confirmation page while making the payment.",
    "Cancellation of registration without any valid reason is not permissible.",
    "Registration must be paid and confirmed before the deadline. We may revise our terms and conditions as per the government norms, for example to reflect changes in relevant laws or regulatory requirements or improvements.",
    "Authors are advised to share their grievance at info@icmeet.co.uk along with the snapshot of the payment confirmation page (obtained while making the payment).",
]

export function RegistrationInfo() {
  return (
    <section id="registration-info" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">Online Registration & Payment Policy</CardTitle>
                    <CardDescription>Instructions for Author(s) Registration & Payment of Registration Fee</CardDescription>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-4">
                        {instructions.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground text-justify">{item}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-bold font-headline">Registration Fee (Physical Mode):</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-justify">
                        This fee includes access to Inaugural Session, Keynotes/Invited Lectures, Oral Paper Presentation Sessions, Networking, Conference Lunch and Refreshment, Conference Kit, Participation/Presentation Certificate. The conference is non-residential and delegates are kindly requested to make their own arrangement for accommodation. In case of any queries, feel free to e-mail the organizing team.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-bold font-headline">Registration Fee (Online Mode):</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-justify">
                        This fee includes access to Inaugural Session, Keynotes/Invited Lectures, Oral Paper Presentation Sessions in online mode, Participation/Presentation Certificate (through e-mail after the completion of conference).
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
