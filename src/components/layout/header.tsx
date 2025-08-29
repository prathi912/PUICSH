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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

  const NavItems = ({ isMobile }: { isMobile?: boolean }) => (
     <>
      {navLinks.map((link) =>
        link.isDropdown ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium transition-colors text-foreground/80 hover:text-primary outline-none ${isMobile ? 'w-full justify-start' : ''}`}
            >
              {link.label} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.items?.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} onClick={closeMobileMenu}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={link.href}
            href={link.href!}
            className="text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
            onClick={closeMobileMenu}
          >
            {link.label}
          </Link>
        )
      )}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-card/80 backdrop-blur-sm" : "bg-transparent"
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
        
        <nav className="hidden items-center gap-6 lg:flex">
          <NavItems />
        </nav>
        
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90"><Link href="/register">Register</Link></Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm">
              <div className="p-6">
                <Link href="/" className="mb-6 flex items-center gap-2" onClick={closeMobileMenu}>
                    <Image 
                        src="https://pinxoxpbufq92wb4.public.blob.vercel-storage.com/RDC-PU-LOGO-BLACK.svg" 
                        alt="Parul University Logo" 
                        width={180} 
                        height={36} 
                        className="dark:invert h-9 w-auto"
                     />
                </Link>
                <nav className="flex flex-col gap-4">
                  <NavItems isMobile />
                </nav>
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
