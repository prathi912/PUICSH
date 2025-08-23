import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";

const dates = [
  { date: "October 30, 2024", event: "Abstract Submission Deadline" },
  { date: "November 30, 2024", event: "Full Paper Submission Deadline" },
  { date: "December 15, 2024", event: "Early Bird Registration Ends" },
  { date: "January 15, 2025", event: "Registration Deadline" },
  { date: "January 24-25, 2025", event: "Conference Dates" },
];

export function ImportantDates() {
  return (
    <section id="dates" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Important Dates</h2>
            <p className="text-muted-foreground mb-8">Mark your calendars! Don't miss these crucial deadlines.</p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border hidden sm:block"></div>
              {dates.map((item, index) => (
                <div key={index} className="relative flex items-start gap-4 mb-6 last:mb-0">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                    <CalendarCheck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{item.date}</p>
                    <h3 className="font-semibold text-lg">{item.event}</h3>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
