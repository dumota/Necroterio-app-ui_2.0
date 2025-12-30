import Home from "@/components/pages/home";
import HomeSkeleton from "@/components/pages/home/components/skeleton";
import { Suspense } from "react";
export default function HomePage() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <Home />
    </Suspense>
    
  );
}
