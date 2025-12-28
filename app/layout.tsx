import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "sonner";

const horroFont = localFont({
  src: [{path: '../fonts/HelpMe.ttf', weight: '100', }],
  variable: '--font-horror',
})

export const metadata: Metadata = {
  title: "Necroterio",
  description: "Necroterio is a platform for creating and managing your own terror blog",
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    title: "Necroterio",
    description: "Necroterio is a platform for creating and managing your own terror blog",
    images: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={horroFont.className}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
