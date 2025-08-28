import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Clock, MapPin, Mic } from "lucide-react";

const day1Schedule = [
  { time: "09:00 - 10:00", title: "Registration & Welcome Coffee", location: "Lobby" },
  { time: "10:00 - 10:30", title: "Opening Ceremony & Keynote", speaker: "Dr. Evelyn Reed", location: "Main Auditorium" },
  { time: "10:30 - 12:00", title: "Session 1: AI in Diagnostics", location: "Hall A" },
  { time: "12:00 - 13:00", title: "Lunch Break", location: "Dining Hall" },
  { time: "13:00 - 14:30", title: "Session 2: Telemedicine Advances", location: "Hall B" },
  { time: "15:00 - 16:30", title: "Workshop: Sustainable Lab Practices", speaker: "Dr. Ben Carter", location: "Workshop Room 1" },
];

const day2Schedule = [
  { time: "09:30 - 10:30", title: "Keynote: Genomics and Personalized Medicine", speaker: "Dr. Sofia Khan", location: "Main Auditorium" },
  { time: "10:30 - 12:00", title: "Session 3: Global Health Challenges", location: "Hall A" },
  { time: "12:00 - 13:00", title: "Lunch Break", location: "Dining Hall" },
  { time: "13:00 - 14:30", title: "Session 4: Innovations in Medical Devices", location: "Hall B" },
  { time: "14:30 - 16:00", title: "Poster Presentations & Networking", location: "Exhibition Hall" },
  { time: "16:00 - 16:30", title: "Closing Remarks & Awards", location: "Main Auditorium" },
];


export function Program() {
  
  const ScheduleItem = ({ event }: { event: any }) => (
    <div className="flex items-start gap-4 py-4 transition-all duration-300 hover:bg-muted/50 -mx-6 px-6">
        <div className="w-24 text-right pr-4 text-primary font-semibold flex-shrink-0">
            <Clock className="inline-block h-4 w-4 mr-1" />
            {event.time}
        </div>
        <div className="border-l-2 border-border pl-4">
          <h3 className="font-semibold text-lg">{event.title}</h3>
          {event.speaker && <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><Mic className="h-4 w-4" /> {event.speaker}</p>}
          {event.location && <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><MapPin className="h-4 w-4" /> {event.location}</p>}
        </div>
    </div>
  );

  return (
    <section id="program" className="py-16 md:py-24 transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Conference Program</h2>
            <p className="text-muted-foreground mb-8">
            Here’s a glimpse of what to expect. The full, detailed schedule will be available for download soon.
            </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-6">
                 <Tabs defaultValue="day1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="day1">Day 1: 19th December</TabsTrigger>
                        <TabsTrigger value="day2">Day 2: 20th December</TabsTrigger>
                    </TabsList>
                    <TabsContent value="day1" className="mt-6 divide-y">
                        {day1Schedule.map((event, index) => <ScheduleItem key={index} event={event} />)}
                    </TabsContent>
                    <TabsContent value="day2" className="mt-6 divide-y">
                        {day2Schedule.map((event, index) => <ScheduleItem key={index} event={event} />)}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
        <div className="text-center mt-8">
            <Button variant="outline" className="transition-transform duration-300 hover:scale-110">
                <Download className="mr-2 h-4 w-4" />
                Download Full Schedule (PDF)
            </Button>
        </div>
      </div>
    </section>
  );
}
