import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";

const objectives = [
  "To highlight cutting-edge research and innovations in sustainable health.",
  "To discuss advances in functional biomaterials and their applications in health.",
  "To address the challenges in implementing sustainable health practices globally.",
  "To foster interdisciplinary collaboration among researchers, industry professionals, and policymakers.",
  "To provide a platform for networking and sharing best practices in sustainable health.",
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
            <div className="text-center">
              <SectionTitle className="justify-center mb-4">About The Conference</SectionTitle>
              <p className="text-muted-foreground text-justify max-w-4xl mx-auto leading-relaxed">
                The 1st International Conference on Sustainable Health: Innovations, Advances, and Challenges aims to bring together leading researchers, academicians, practitioners, and policymakers from around the world to discuss and share the latest innovations, advances, and challenges in the field of sustainable health. This conference will serve as a platform for interdisciplinary collaboration and knowledge exchange, promoting the development and implementation of sustainable health solutions.
              </p>
            </div>
          </div>

          <div className="mb-16">
             <div className="text-center mb-8">
                <SectionTitle className="justify-center">About Parul University</SectionTitle>
             </div>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground text-justify leading-relaxed">
                    A multidisciplinary destination of learning and innovation, propelling quality in higher education with a record of being India’s youngest private university to receive NAAC A++ accreditation in the first cycle. Situated in Vadodara, Gujarat, Parul University, is an embodiment of the nation’s essence of cultural heritage blended with modern innovations and academic practices for student enrichment, while fostering national and global development. The University is an amalgamation of faculties and institutes that offer a plethora of diploma, undergraduate, postgraduate and doctoral programs in numerous disciplines. Through its uniquely structured, industry linked and field aligned programs, the University holds a noteworthy record of fulfilling the infinite dreams of students, by launching their lucrative careers towards high trajectories through start–up incubation and impeccable placement records. The 125–acre eco- friendly campus is home to over 43,000 students from every State of India and over 2,500 international students from 68 countries, making Parul University a truly culturally global destination.
                  </p>
                </div>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.youtube.com/embed/TmVDdtfi9K4"
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
             </div>
          </div>

          <div>
             <SectionTitle className="justify-center mb-8">Objectives</SectionTitle>
             <ul className="space-y-4 max-w-4xl mx-auto">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
