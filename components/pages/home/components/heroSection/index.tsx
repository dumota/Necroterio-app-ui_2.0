import { Button } from "@/components/terrorui/button";
import Image from "next/image";

export default function HeroSection() {
    return(
        <section className="relative min-h-[calc(80vh-56px)] md:min-h-[calc(80vh-64px)] flex items-center justify-center overflow-hidden px-4">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <Image src={"/assets/hero-bg.jpg"} alt="Hero Background" fill className="object-cover" />
          <div className="absolute inset-0" />
        </div>
  
        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto py-12 md:py-0">
        
          <div className="font-helpme text-5xl sm:text-5xl md:text-9xl text-blood blood-drip tracking-tight mb-6 md:mb-8 leading-none">
            NECROTERIO
          </div>
  
         
          <p className="font-typewriter text-bone text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 animate-flicker">
            &quot;Onde os mortos nunca descansam&quot;
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="default" size="lg">
              ENTRAR SE TIVER CORAGEM
            </Button>
        
          </div>
        </div>
  
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-bone/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-blood rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    )
}