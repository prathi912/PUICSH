import React from "react";
import Link from "next/link";
import { X, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Image src="https://pinxoxpbufq92wb4.public.blob.vercel-storage.com/RDC-PU-LOGO-BLACK.svg" alt="Parul University Logo" width={200} height={40} className="dark:invert" />
            </div>
            <p className="text-sm text-muted-foreground">
              Organized by the Parul University Research and Development Cell.
            </p>
          </div>
          <div className="md:text-center">
             <h4 className="font-semibold mb-4">Quick Links</h4>
             <ul className="space-y-2">
                 <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                 <li><Link href="#speakers" className="text-sm text-muted-foreground hover:text-primary">Speakers</Link></li>
                 <li><Link href="#program" className="text-sm text-muted-foreground hover:text-primary">Program</Link></li>
                 <li><Link href="#registration" className="text-sm text-muted-foreground hover:text-primary">Register</Link></li>
             </ul>
          </div>
          <div className="md:text-right">
             <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex md:justify-end gap-4">
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
        <div className="border-t mt-8 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Parul University. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
