import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold font-headline mb-4">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
          Have questions or need more information? Feel free to reach out to us.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Card className="w-full md:w-auto flex-1 max-w-sm">
            <CardContent className="p-6 text-center">
                <div className="mx-auto bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4">Email Us</h3>
                <p className="text-muted-foreground mt-1">For general inquiries and support.</p>
                <Button variant="link" asChild className="text-primary mt-2">
                    <a href="mailto:info@healthcon2025.org">info@healthcon2025.org</a>
                </Button>
            </CardContent>
          </Card>
          <Card className="w-full md:w-auto flex-1 max-w-sm">
            <CardContent className="p-6 text-center">
                 <div className="mx-auto bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4">Call Us</h3>
                <p className="text-muted-foreground mt-1">For urgent matters and registration help.</p>
                <Button variant="link" asChild className="text-primary mt-2">
                    <a href="tel:+911234567890">+91 123 456 7890</a>
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
