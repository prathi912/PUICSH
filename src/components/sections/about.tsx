import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline">About The Conference</h2>
          <p className="mt-4 text-muted-foreground">
            HealthCon 2025 is the premier event for professionals dedicated to advancing sustainable practices in global health. Our mission is to foster innovation, share knowledge, and build collaborations that address the critical challenges at the intersection of healthcare and environmental stewardship. Join us to explore cutting-edge research, transformative technologies, and forward-thinking policies.
          </p>
          <Button variant="outline" className="mt-6">Read More</Button>
        </div>
      </div>
    </section>
  );
}
