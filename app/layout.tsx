import { AuthProvider } from "@/providers/AuthProvider";
import { GlobalLoadingProvider } from "@/providers/GlobalLoading";
import { tokenConstant } from "@/types/constants/Token";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import { Toaster } from "sonner";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { CategoryProvider } from "@/providers/CategoryProvider";

const helpMeFont = localFont({
  src: "../fonts/HelpMe.ttf",
  variable: "--font-helpme",
  display: "swap",
  preload: true,
});


export const metadata: Metadata = {
  title: "Necroterio",
  description:
    "Necroterio is a platform for creating and managing your own terror blog",
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    title: "Necroterio",
    description:
      "Necroterio is a platform for creating and managing your own terror blog",
    images: "/assets/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get(tokenConstant.TOKEN)?.value ?? null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={helpMeFont.variable}>
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
        >
          <AuthProvider initialToken={token}>
            <ReactQueryProvider>
              <GlobalLoadingProvider>
                <CategoryProvider>
                  {children}
                </CategoryProvider>
                <Toaster richColors />
              </GlobalLoadingProvider>
            </ReactQueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
