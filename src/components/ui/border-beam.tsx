
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  duration?: number;
  size?: number;
  className?: string;
}

export const BorderBeam = ({
  duration = 8,
  size = 100,
  className,
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-500 hover:opacity-100",
        className
      )}
    >
      <div
        className="absolute inset-px rounded-[inherit] opacity-0 [mask-image:linear-gradient(to_bottom_right,black,transparent,transparent)]"
        style={{
          animation: `move-beam ${duration}s linear infinite`,
          background: `conic-gradient(from 0deg at ${size}% ${size}%, transparent 0%, #1A1A1A 15%, transparent 60%)`,
        }}
      />
    </div>
  );
};
