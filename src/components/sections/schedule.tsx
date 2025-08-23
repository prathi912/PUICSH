import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Mic, User } from "lucide-react";

const day1Schedule = [
  { time: "09:00 - 10:00", title: "Registration & Welcome Coffee", type: "Networking" },
  { time: "10:00 - 10:30", title: "Opening Ceremony & Keynote", speaker: "Dr. Evelyn Reed", location: "Main Auditorium", type: "Keynote" },
  { time: "10:30 - 12:00", title: "Session 1: AI in Diagnostics", speaker: "Multiple Speakers", location: "Hall A", type: "Session" },
  { time: "12:00 - 13:00", title: "Lunch Break", type: "Break" },
  { time: "13:00 - 14:30", title: "Session 2: Telemedicine Advances", speaker: "Multiple Speakers", location: "Hall B", type: "Session" },
  { time: "14:30 - 15:00", title: "Coffee Break", type: "Break" },
  { time: "15:00 - 16:30", title: "Workshop: Sustainable Lab Practices", speaker: "Dr. Ben Carter", location: "Workshop Room 1", type: "Workshop" },
];

const day2Schedule = [
  { time: "09:30 - 10:30", title: "Keynote: Genomics and Personalized Medicine", speaker: "Dr. Sofia Khan", location: "Main Auditorium", type: "Keynote" },
  { time: "10:30 - 12:00", title: "Session 3: Global Health Challenges", speaker: "Multiple Speakers", location: "Hall A", type: "Session" },
  { time: "12:00 - 13:00", title: "Lunch Break", type: "Break" },
  { time: "13:00 - 14:30", title: "Session 4: Innovations in Medical Devices", speaker: "Multiple Speakers", location: "Hall B", type: "Session" },
  { time: "14:30 - 16:00", title: "Poster Presentations & Networking", location: "Exhibition Hall", type: "Networking" },
  { time: "16:00 - 16:30", title: "Closing Remarks & Awards", location: "Main Auditorium", type: "Ceremony" },
];


export function Schedule() {
  const getTypeColor = (type: string) => {
    switch(type) {
      case "Keynote": return "bg-primary text-primary-foreground";
      case "Session": return "bg-secondary text-secondary-foreground";
      case "Workshop": return "bg-accent text-accent-foreground";
      case "Networking": return "bg-blue-200 text-blue-800";
      case "Break": return "bg-gray-200 text-gray-800";
      default: return "bg-muted text-muted-foreground";
    }
  }

  const ScheduleCard = ({ event }: { event: any }) => (
    <Card className="mb-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col items-center justify-center sm:w-32">
           <div className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Clock className="h-5 w-5" />
            <span>{event.time}</span>
          </div>
        </div>
        <div className="sm:border-l sm:pl-4 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <Badge variant="outline" className={getTypeColor(event.type)}>{event.type}</Badge>
          </div>
          {event.speaker && <p className="text-muted-foreground flex items-center gap-2 mt-2"><Mic className="h-4 w-4" /> {event.speaker}</p>}
          {event.location && <p className="text-muted-foreground flex items-center gap-2 mt-1"><MapPin className="h-4 w-4" /> {event.location}</p>}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="schedule" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline">Event Schedule</h2>
        <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="day1">Day 1: 24th January</TabsTrigger>
            <TabsTrigger value="day2">Day 2: 25th January</TabsTrigger>
          </TabsList>
          <TabsContent value="day1" className="mt-6">
            {day1Schedule.map((event, index) => <ScheduleCard key={index} event={event} />)}
          </TabsContent>
          <TabsContent value="day2" className="mt-6">
            {day2Schedule.map((event, index) => <ScheduleCard key={index} event={event} />)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
