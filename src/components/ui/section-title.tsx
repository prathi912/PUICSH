import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      <h2 className="text-3xl font-bold font-headline whitespace-nowrap">{children}</h2>
      <div className="hidden sm:flex flex-grow w-full items-center">
        <div className="h-0.5 bg-primary w-16"></div>
        <div className="h-0.5 bg-accent w-32 mt-1 ml-[-4rem]"></div>
      </div>
    </div>
  );
}
