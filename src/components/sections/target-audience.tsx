import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const audienceList = [
    "Researchers and Academicians",
    "Healthcare Professionals",
    "Industry Experts",
    "Policymakers",
    "Environmental Scientists",
    "Biomedical Engineers",
    "Public Health Officials",
    "Graduate and Postgraduate Students of Pharma, Biotech, Health science and Agriculture",
]

export function TargetAudience() {
  return (
    <section id="target-audience" className="py-16 md:py-24 bg-card transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <SectionTitle>
                <Users className="h-8 w-8 text-primary mr-2" />
                <span>Target Audience</span>
              </SectionTitle>
            </div>
          </CardHeader>
          <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 p-6 pt-4">
                  {audienceList.map((audience) => (
                      <li key={audience} className="flex items-start">
                           <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2.5 mr-3"></div>
                          <span>{audience}</span>
                      </li>
                  ))}
              </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
