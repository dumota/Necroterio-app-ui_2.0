import VhsPlay from "@/components/effects/VhsPlay"
import { Button } from "@/components/terrorui/button";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function HeaderListBlogs({ count }: { count: number }) {
    return (

        <header className="relative z-10 border-b-2 border-blood/30 bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-blood hover:text-blood/80 transition-colors font-vhs text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="hidden sm:inline">VOLTAR</span>
                    </Link>
                    <VhsPlay />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                    <div>
                        <h1 className="font-creepy text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blood tracking-wider drop-shadow-[0_0_10px_rgba(139,0,0,0.5)]">
                            Acervo de horrores
                        </h1>
                        <p className="text-muted-foreground font-mono text-xs md:text-sm mt-1">
                            {count} registros encontrados
                        </p>
                    </div>

                    <Link href="/blog/create">
                        <Button className="bg-blood hover:bg-blood/80 text-white font-vhs text-sm w-full md:w-auto">
                            + CRIAR BLOG
                        </Button>
                    </Link>
                </div>
            </div>
        </header>

    )
}