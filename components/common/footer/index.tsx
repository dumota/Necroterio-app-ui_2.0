import { CopyrightIcon } from "lucide-react";


export default function Footer(){
    return(
        <footer className="bg-neutral-950 text-neutral-50 flex flex-col items-center justify-center gap-2 p-4 text-sm">
            <div>
                Necroterio
            </div>
            <div className="flex flex-row items-center gap-2">
                <CopyrightIcon />
                <p>2025 Necroterio - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}