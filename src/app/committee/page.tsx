import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const committees = {
  "Chief Patron": [
    { name: "Dr. Devanshu Patel", affiliation: "President, Parul University, Gujarat" },
    { name: "Dr. Geetika Madan Patel", affiliation: "Vice-President & Medical Director, Parul University, Gujarat" },
    { name: "Dr. Parul Patel", affiliation: "Vice-President & Medical Director, Parul University, Gujarat" },
    { name: "Dr. Komal Patel", affiliation: "Vice-President & Medical Director, Parul University, Gujarat" },
  ],
  "Patron": [
    { name: "Dr. Amit P. Ganatra", affiliation: "Provost, Parul University, Gujarat" },
    { name: "Prof. Manish Pandya", affiliation: "Registrar, Parul University, Gujarat" },
    { name: "Dr. Anand Joshi", affiliation: "Director, RDC, Parul University, Gujarat" },
  ],
  "Chairman": [
    { name: "Dr. Trilok Akhani", affiliation: "Dean, PIAS, Parul University, Gujarat" },
    { name: "Dr. Unnati Joshi", affiliation: "Director (Research) & Professor in Mechatronics Engineering, Parul University, Gujarat" },
  ],
  "Convenors": [
    { name: "Dr. Tarun Kumar Upadhyay", affiliation: "Associate Professor & Deputy Director, RDC, Parul University, Gujarat" },
    { name: "Dr. Manish Vyas", affiliation: "Associate Director, RDC, Parul University, Gujarat" },
  ],
  "Co-Convenors": [
    { name: "Dr. Vijay Upadhye", affiliation: "Associate Director RDC, Parul University, Gujarat" },
    { name: "Dr. Hemant Patadia", affiliation: "Allied Health Sciences, Parul University, Gujarat" },
  ],
  "Organizing Secretaries": [
    { name: "Dr. Pradeep Kumar Brahman", affiliation: "Associate Director, RDC, Parul University, Gujarat" },
    { name: "Dr. Vishal Sandhwar", affiliation: "Deputy Director, RDC, Parul University, Gujarat" },
    { name: "Dr. Gireesh Babu K", affiliation: "Head, Department of Life Sciences, Parul University, Gujarat" },
  ],
  "Organizing Joint Secretaries": [
    { name: "Dr. Soyeb Pathan", affiliation: "Deputy Director, RDC, Parul University, Gujarat" },
    { name: "Dr. Richa Mishra", affiliation: "Director, Scope, Parul University, Gujarat" },
    { name: "Dr. Rajan Kumar Singh", affiliation: "Head, Bioengineering, Parul University, Gujarat" },
    { name: "Dr. Bibhas Bhunia", affiliation: "Assistant Professor, Parul University, Gujarat" },
  ],
  "Registration Committee": [{ name: "Dr. Megha Barot" }, { name: "Dr. Nivedita Priya" }, { name: "Dr. Surti Patel" }],
  "Finance Committee": [{ name: "Dr. Anand Joshi" }, { name: "Dr. Pradeep Kumar Brahman" }, { name: "Dr. Tarun Kumar Upadhyay" }, { name: "Dr. Manish Vyas" }],
  "Sponsorship Committee": [{ name: "Dr. Mukul Jain" }, { name: "Dr. Om Prakash" }, { name: "Dr. Vijay Upadhye" }, { name: "Dr. Soyeb Pathan" }, { name: "Dr. Vishal Sandhwar" }, { name: "Dr. Mukul Jain" }, { name: "Dr. Asha Patel" }],
  "Technical Committee": [{ name: "Dr. Mahendra Singh Rathore" }, { name: "Dr. Mohit Tannarana" }, { name: "Dr. Bibhas Bhunia" }, { name: "Dr. Payal Deb" }, { name: "Dr. Asha Patel" }, { name: "Dr. Kirtan Dave" }],
  "Publication Committee": [{ name: "Dr. Sumit" }, { name: "Dr. Prince Jain" }, { name: "Dr. Vinay Sharma" }, { name: "Dr. Ved Prakash" }],
  "Transport Committee": [{ name: "Dr. Ark Dev" }, { name: "Dr. Mukul Jain" }, { name: "Mr. Maulesh" }, { name: "Dr. Pradeep Kumar" }],
  "Food and Catering Committee": [{ name: "Dr. Vijay Upadhye" }, { name: "Dr. Afzal Naglani" }, { name: "Dr. Vishal Mehta" }],
  "Accommodation Committee": [{ name: "Dr. Soyeb Pathan" }, { name: "Dr. Prasanna Mathad" }],
  "Venue Management Committee": [{ name: "Dr. Juhi Saxena" }, { name: "Dr. Meenu Khan" }, { name: "Dr. Anwesh Dey" }, { name: "Dr. Pujit Bhatt" }, { name: "Mr. Jaivik Pathak" }],
  "Website Management Committee": [{ name: "Mr. Pranav Rathi" }],
  "Media and Publicity Committee": [{ name: "Dr. Vishal Sorathiya" }, { name: "Dr. Dhawani Upadhyay" }, { name: "Dr. Ankita Priyadarshini" }],
  "Volunteer/Protocol Officer": [{ name: "Research Scholars" }],
};

export default function CommitteePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <SectionTitle className="justify-center mb-12">Conference Committee</SectionTitle>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Object.entries(committees).map(([title, members]) => (
                <Card key={title} className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <CardTitle className="text-xl text-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-3">
                    {members.map((member, index) => (
                        <li key={index}>
                        <h4 className="font-semibold">{member.name}</h4>
                        {'affiliation' in member && member.affiliation && <p className="text-sm text-muted-foreground">{member.affiliation}</p>}
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
