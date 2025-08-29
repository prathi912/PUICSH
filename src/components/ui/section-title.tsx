import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)} {...props}>
      <h2 className="text-3xl font-bold font-headline whitespace-nowrap text-center">{children}</h2>
    </div>
  );
}
