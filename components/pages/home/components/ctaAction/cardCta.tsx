import { Heart, Pen, Users } from "lucide-react";
import { Button } from "@/components/terrorui/button";
import VhsDecoration from "@/components/effects/vhsDecoration";

export const CardCta = () => {
    return (
        <div className="container  z-10">
        <div className="w-full mx-auto text-center">
          {/* VHS Frame decoration */}
          <div className="inline-block mb-8 p-1 border-4 border-primary/30 relative">
            <VhsDecoration/>
            <div className="bg-card p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                FAÇA PARTE DA
                <span className="block text-primary text-shadow-blood">COMUNIDADE</span>
              </h2>
              
              <p className="font-vhs text-lg text-muted-foreground tracking-wider mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de fãs de terror. Escreva reviews, 
                compartilhe descobertas e reviva a nostalgia das locadoras.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Pen className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-display text-sm text-foreground">Escreva Blogs</p>
                  <p className="font-vhs text-xs text-muted-foreground">Compartilhe sua paixão</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 rounded-full bg-vhs-green/10 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-vhs-green" />
                  </div>
                  <p className="font-display text-sm text-foreground">Conecte-se</p>
                  <p className="font-vhs text-xs text-muted-foreground">Encontre outros fãs</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-display text-sm text-foreground">Descubra</p>
                  <p className="font-vhs text-xs text-muted-foreground">Novas pérolas do terror</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-vhs tracking-wider text-lg px-12">
                CRIAR MINHA CONTA
              </Button>
              
              <p className="font-vhs text-xs text-muted-foreground mt-4">
                Grátis para sempre • Sem cartão necessário
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};