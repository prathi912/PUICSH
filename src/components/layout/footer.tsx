import React from "react";
import Link from "next/link";
import { X, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
               <Image src="https://pinxoxpbufq92wb4.public.blob.vercel-storage.com/RDC-PU-LOGO-BLACK.svg" alt="Parul University Logo" width={300} height={50} className="dark:invert" />
            </div>
            <p className="text-sm text-muted-foreground text-justify">
              Organised by Parul University Research & Development Cell, Department of Life Sciences, in association with the Association of Biotechnology and Pharmacy (ABAP).
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                  <li><Link href="/#home" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
                  <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                  <li><Link href="/#speakers" className="text-sm text-muted-foreground hover:text-primary">Speakers</Link></li>
                  <li><Link href="/#program" className="text-sm text-muted-foreground hover:text-primary">Program</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Attendees</h4>
              <ul className="space-y-2">
                  <li><Link href="/register" className="text-sm text-muted-foreground hover:text-primary">Register</Link></li>
                  <li><Link href="/submission-info" className="text-sm text-muted-foreground hover:text-primary">Submit Paper</Link></li>
                  <li><Link href="/travel/accommodation" className="text-sm text-muted-foreground hover:text-primary">Travel Info</Link></li>
                  <li><Link href="/committee" className="text-sm text-muted-foreground hover:text-primary">Committee</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-2">
               <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="https://www.instagram.com/Paruluniversity/#" target="_blank" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://www.facebook.com/ParulUniversity" target="_blank" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCeXQgKg0qhTKbNRi5hpIL9A" target="_blank" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/school/paruluniversity/posts/?feedView=all" target="_blank" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Parul University. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}