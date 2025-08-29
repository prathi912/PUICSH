import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';

const registrationTiers = [
  {
    name: "Student / Trainee",
    price: "₹3000",
    features: [
      "Access to all sessions",
      "Conference Kit",
      "Lunch & Refreshments",
      "Certificate of Participation",
    ],
  },
  {
    name: "Academic / Professional",
    price: "₹5000",
    features: [
      "Access to all sessions",
      "Conference Kit",
      "Lunch & Refreshments",
      "Certificate of Participation",
      "Networking Dinner",
    ],
    primary: true,
  },
    {
    name: "Industry Delegate",
    price: "₹8000",
    features: [
      "All Academic benefits",
      "Exclusive Industry Round-table",
      "B2B Networking Opportunities",
      "Featured in Delegate List",
    ],
  },
];

export function Registration() {
  return (
    <section id="registration" className="py-16 md:py-24 bg-card transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Registration</h2>
            <p className="text-muted-foreground mb-12 text-justify">
                Secure your spot at HealthCon 2025. Choose the registration package that suits you best.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {registrationTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl ${tier.primary ? 'border-primary border-2 relative' : ''}`}>
              {tier.primary && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-semibold text-primary-foreground bg-primary rounded-full">Most Popular</div>}
              <CardHeader className="text-center p-6">
                <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-accent pt-2">{tier.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6 pt-0">
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-110">
                    <Link href="#">Register Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
