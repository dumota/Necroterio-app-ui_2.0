import Image from "next/image";
import { cn } from "tailwind-variants";

export interface iFilmStripProps {
    images: string[];
    speed?: number; 
    className?: string;
  }
  
  export default function FilmStrip({ images, speed = 70, className }: iFilmStripProps) {
    if (!images || images.length === 0) return null;

    return (
      <div className={cn("relative overflow-hidden py-4" , className)}>
        <div 
          className="flex animate-scroll w-max"
          style={{ '--scroll-duration': `${speed}s` } as React.CSSProperties}
        >
          {[...images, ...images].map((image, index) => (
            <div key={`film-${index}`} className="shrink-0 mx-1">
              {/* Film frame */}
              <div className="relative bg-card border-y-8 border-card">
                {/* Sprocket holes top */}
                <div className="absolute -top-6 left-0 right-0 flex justify-around">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-2 bg-background rounded-sm" />
                  ))}
                </div>
                
                {/* Image */}
                <div className="w-32 h-24 overflow-hidden">
                  <Image 
                    src={image} 
                    alt={`Frame ${index + 1}`}
                    className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-300"
                    width={100}
                    height={100}
                  />
                </div>
                
                {/* Sprocket holes bottom */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-around">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-3 h-2 bg-background rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  