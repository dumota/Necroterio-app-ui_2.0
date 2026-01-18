
import Footer from "../common/footer";
import Navbar from "../common/navbar";


export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar />
      </div>
        <main className="flex-1 mt-25">
          {children}
        </main>

      <Footer />
    </div>
  );
}