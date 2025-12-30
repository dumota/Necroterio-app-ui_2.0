import { Icon } from "@iconify/react";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Pagina não encontrada</h1>
      <div>
        <Icon icon="la:home" width={20} height={20} />
        <Link href="/">Voltar para a home</Link>
      </div>
    </div>
  );
}