
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  {
    label: "Call for Papers",
    isDropdown: true,
    items: [
      { href: "/submission-info", label: "Submission Info" },
      { href: "/crc-info", label: "CRC Info" },
    ],
  },
  {
    label: "Travel",
    isDropdown: true,
    items: [
      { href: "/travel/visa", label: "Visa" },
      { href: "/travel/how-to-reach", label: "How to Reach" },
      { href: "/travel/accommodation", label: "Accommodation" },
      { href: "/travel/near-by-attractions", label: "Nearby Attractions" },
    ],
  },
  { href: "/committee", label: "Committee" },
  { href: "/#speakers", label: "Speakers" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const DesktopNav = () => (
    <nav className="hidden items-center gap-6 lg:flex">
      {navLinks.map((link) =>
        link.isDropdown ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger
              className="flex items-center gap-1 text-sm font-medium transition-colors text-foreground/80 hover:text-primary outline-none"
            >
              {link.label} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.items?.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={link.href}
            href={link.href!}
            className="text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );

  const MobileNav = () => (
    <nav className="flex flex-col gap-4">
      <Accordion type="multiple" className="w-full">
        {navLinks.map((link) =>
          link.isDropdown ? (
            <AccordionItem value={link.label} key={link.label} className="border-b-0">
              <AccordionTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:no-underline">
                {link.label}
              </AccordionTrigger>
              <AccordionContent className="pb-0 pl-4">
                <div className="flex flex-col gap-2 pt-2 border-l">
                  {link.items?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block pl-4 py-1 text-sm text-foreground/70 hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ) : (
            <div key={link.href}>
              <Link
                href={link.href!}
                className="block py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </div>
          )
        )}
      </Accordion>
    </nav>
  );


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
           <Image 
            src="https://pinxoxpbufq92wb4.public.blob.vercel-storage.com/RDC-PU-LOGO-BLACK.svg" 
            alt="Parul University Logo" 
            width={160} 
            height={40} 
            className="dark:invert h-10 w-auto"
            priority
            />
        </Link>
        
        <DesktopNav />
        
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90"><Link href="/register">Register</Link></Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm p-0">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                      <Image 
                          src="https://pinxoxpbufq92wb4.public.blob.vercel-storage.com/RDC-PU-LOGO-BLACK.svg" 
                          alt="Parul University Logo" 
                          width={180} 
                          height={36} 
                          className="dark:invert h-9 w-auto"
                       />
                  </Link>
                   <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </div>
                <MobileNav />
                <Button asChild className="w-full mt-6 bg-accent hover:bg-accent/90" onClick={closeMobileMenu}>
                    <Link href="/register">Register Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
