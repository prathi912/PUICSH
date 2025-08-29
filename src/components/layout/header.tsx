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
  { href: "/#dates", label: "Dates" },
  { href: "/#committee", label: "Committee" },
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

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );
  
  const NavItems = () => (
     <>
      {navLinks.map((link) =>
        link.isDropdown ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors text-foreground/80 hover:text-primary outline-none">
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
          <NavLink key={link.href} href={link.href!} label={link.label} />
        )
      )}
    </>
  )

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-card/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6">
           <Image src="https://pinxoxpbufq92wb4.public.blob.vercel-storage.com/RDC-PU-LOGO-BLACK.svg" alt="Parul University Logo" width={200} height={40} className="dark:invert h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
           <nav className="hidden items-center gap-6 md:flex">
            <NavItems />
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90"><Link href="/#registration">Register Now</Link></Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                      <Image src="https://pinxoxpbufq92wb4.public.blob.vercel-storage.com/RDC-PU-LOGO-BLACK.svg" alt="Parul University Logo" width={200} height={40} className="dark:invert" />
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <NavItems />
                  </nav>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90"><Link href="/#registration">Register Now</Link></Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
