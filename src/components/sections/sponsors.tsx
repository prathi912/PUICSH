import Image from "next/image";

const sponsors = [
  { name: "PharmaCo", logo: "https://placehold.co/200x100.png", hint: "pharmaceuticals logo" },
  { name: "HealthTech Innovations", logo: "https://placehold.co/200x100.png", hint: "health tech logo" },
  { name: "BioGen Labs", logo: "https://placehold.co/200x100.png", hint: "biotech logo" },
  { name: "Gujarat MedSupplies", logo: "https://placehold.co/200x100.png", hint: "medical supply logo" },
  { name: "EcoBank", logo: "https://placehold.co/200x100.png", hint: "finance logo" },
  { name: "Innovate India", logo: "https://placehold.co/200x100.png", hint: "government logo" },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4 font-headline">Our Sponsors</h2>
        <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
          We are grateful for the generous support of our sponsors who make this conference possible.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex justify-center">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={75}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                data-ai-hint={sponsor.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
