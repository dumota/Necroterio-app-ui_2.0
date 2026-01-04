import { Roboto, Open_Sans, Montserrat,Caveat } from 'next/font/google';

        // Fonte Principal (Global)
// export const roboto = Roboto({
//   weight: ['400', '700'], // Pesos desejados (Regular, Bold)
//   subsets: ['latin'],     // Conjunto de caracteres
// });

export const caveat = Caveat({
    weight: ['400', '700'], // Pesos desejados (Regular, Bold)
    subsets: ['latin'],     // Conjunto de caracteres
    variable: '--font-caveat',
    display: 'swap',
    preload: true
  });
  

// // Fonte Secundária (para títulos, por exemplo)
// export const montserrat = Montserrat({
//   weight: ['600'],
//   subsets: ['latin'],
// });

// // Fonte para outro componente específico
// export const openSans = Open_Sans({
//   weight: '400',
//   subsets: ['latin'],
// });
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl">
      {children}
    </div>
  );
}