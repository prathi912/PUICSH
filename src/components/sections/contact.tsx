import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, X, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <SectionTitle className="justify-center mb-4">Get in Touch</SectionTitle>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8 text-justify">
          Have questions or need more information? Feel free to reach out to us.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-6 text-center">
                <div className="mx-auto bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4">Email Us</h3>
                <p className="text-muted-foreground mt-1">For general inquiries and support.</p>
                <Button variant="link" asChild className="text-primary mt-2">
                    <a href="mailto:rdc@paruluniversity.ac.in">rdc@paruluniversity.ac.in</a>
                </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-6 text-center">
                 <div className="mx-auto bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4">Call Us</h3>
                <p className="text-muted-foreground mt-1">For urgent matters and registration help.</p>
                <Button variant="link" asChild className="text-primary mt-2">
                    <a href="tel:+919156920670">+91 9156920670</a>
                </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
            <h4 className="font-semibold mb-4 text-lg">Follow Our Socials</h4>
            <div className="flex justify-center gap-6">
               <Link href="https://www.instagram.com/Paruluniversity/#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.facebook.com/ParulUniversity" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125">
                <Facebook className="h-6 w-6" />
              </Link>
               <Link href="https://www.youtube.com/channel/UCeXQgKg0qhTKbNRi5hpIL9A" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/school/paruluniversity/posts/?feedView=all" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
