import { cn } from "../../lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export function Logo({ className, size = 36, showText = true, textColor = "text-white" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold-500 transition-colors duration-500 group-hover:text-white shrink-0"
      >
        {/* Laurel Wreath Stem */}
        <path
          d="M 28,45 C 26,62 36,74 50,75"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 72,45 C 74,62 64,74 50,75"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        
        {/* Left Laurel Leaves */}
        <path d="M 28,45 C 23,43 25,38 28,45 C 31,40 33,43 28,45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 29,52 C 24,51 25,46 29,52 C 32,48 34,51 29,52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 32,59 C 27,60 27,55 32,59 C 34,55 37,58 32,59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 37,66 C 32,68 31,63 37,66 C 39,62 42,65 37,66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 43,71 C 39,74 37,69 43,71 C 44,67 47,70 43,71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Right Laurel Leaves */}
        <path d="M 72,45 C 77,43 75,38 72,45 C 69,40 67,43 72,45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 71,52 C 76,51 75,46 71,52 C 68,48 66,51 71,52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 68,59 C 73,60 73,55 68,59 C 66,55 63,58 68,59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 63,66 C 68,68 69,63 63,66 C 61,62 58,65 63,66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 57,71 C 61,74 63,69 57,71 C 56,67 53,70 57,71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Outer U-Shield */}
        <path
          d="M 33,26 L 33,56 C 33,68 41,75 50,75 C 59,75 67,68 67,56 L 67,26"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Sword / T - Grip, Pommel, Crossguard & Blade */}
        {/* Crossguard */}
        <path
          d="M 40,21 L 60,21"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Handle (Grip) */}
        <path
          d="M 50,21 L 50,11"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Pommel */}
        <path
          d="M 45,11 L 55,11"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Blade (extends below shield bottom) */}
        <path
          d="M 50,21 L 50,81 L 46,76 M 50,81 L 54,76"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* S Monogram (Elegant customized curve) */}
        <path
          d="M 56,34 C 56,29 44,29 44,37 C 44,45 56,45 56,53 C 56,61 44,61 44,56"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
 
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-display font-medium tracking-[0.15em] text-sm md:text-base leading-none transition-colors group-hover:text-gold-500 duration-500", textColor)}>
            SANTANA
          </span>
          <span className="font-sans text-[7px] uppercase tracking-[0.3em] text-cashmere-500 mt-1">
            Advogados
          </span>
        </div>
      )}
    </div>
  );
}
