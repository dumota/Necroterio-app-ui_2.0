"use client";
import { Button } from "@/components/terrorui/button";
import { useRouter } from "next/navigation";


export default function NotFound() {
    const router = useRouter();
    return (
        <div className="text-center py-16">
            <h3 className="font-creepy text-2xl text-blood mb-2">
                NENHUM REGISTRO ENCONTRADO
            </h3>
            <p className="text-muted-foreground font-mono">
                Tente ajustar os filtros ou buscar por outros termos
            </p>
            <Button
                onClick={() => {
                    const newIrlParamsn = new URLSearchParams(window.location.search);
                    newIrlParamsn.set("page", "1");
                    newIrlParamsn.set("limit", "10");
                    router.push(`/blog/blogsList?${newIrlParamsn.toString()}`);
                }}
                className="mt-4 bg-blood hover:bg-blood/80 font-vhs"
            >
                LIMPAR FILTROS
            </Button>
        </div>
    )
}