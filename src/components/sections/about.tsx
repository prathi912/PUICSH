import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">About The Conference</h2>
            <p className="mt-4 text-muted-foreground">
              The 1st International Conference on Sustainable Health: Innovations, Advances, and Challenges aims to bring together leading researchers, academicians, practitioners, and policymakers from around the world to discuss and share the latest innovations, advances, and challenges in the field of sustainable health. This conference will serve as a platform for interdisciplinary collaboration and knowledge exchange, promoting the development and implementation of sustainable health solutions.
            </p>
          </div>

          <div className="mb-12">
             <h3 className="text-2xl font-bold font-headline text-center mb-4">About Parul University</h3>
             <p className="text-muted-foreground text-justify">
              A multidisciplinary destination of learning and innovation, propelling quality in higher education with a record of being India’s youngest private university to receive NAAC A++ accreditation in the first cycle. Situated in Vadodara, Gujarat, Parul University, is an embodiment of the nation’s essence of cultural heritage blended with modern innovations and academic practices for student enrichment, while fostering national and global development. The University is an amalgamation of faculties and institutes that offer a plethora of diploma, undergraduate, postgraduate and doctoral programs in numerous disciplines. Through its uniquely structured, industry linked and field aligned programs, the University holds a noteworthy record of fulfilling the infinite dreams of students, by launching their lucrative careers towards high trajectories through start–up incubation and impeccable placement records. The 125–acre eco- friendly campus is home to over 43,000 students from every State of India and over 2,500 international students from 68 countries, making Parul University a truly culturally global destination. In addition to its NAAC A++ accreditation, the University holds global memberships in bodies such as the Association of Commonwealth Universities. The University’s stamps of quality extend to its DISR recognition for quality research, NABL accreditation for quality in clinical medical research, NABH accreditation for quality healthcare and ARIIA Top 50 ranking for innovation achievements nationwide. In recognition of Parul University’s excellence in education it has been awarded for being the Best Private University in Western India by Praxis Media and Best University in Placements by ASSOCHAM and the Most Outstanding University in West Zone for having Highest Nationalities in Campus at the World Education Summit Awards.
             </p>
          </div>

          <div>
             <h3 className="text-2xl font-bold font-headline text-center mb-8">Objectives</h3>
             <ul className="space-y-4">
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
