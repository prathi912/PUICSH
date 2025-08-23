"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MonitorSmartphone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#speakers", label: "Speakers" },
  { href: "#papers", label: "Call for Papers" },
  { href: "#venue", label: "Venue" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-card/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2">
          <MonitorSmartphone className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">HealthCon 2025</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90">Register Now</Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="#home" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <MonitorSmartphone className="h-6 w-6 text-primary" />
                  <span className="font-bold">HealthCon 2025</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
                <Button className="w-full bg-accent hover:bg-accent/90">Register Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
