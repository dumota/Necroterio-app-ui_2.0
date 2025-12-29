
import Footer from "../common/footer";
import Navbar from "../common/navbar";


export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-1">
          {children}
        </main>

      <Footer />
    </div>
  );
}