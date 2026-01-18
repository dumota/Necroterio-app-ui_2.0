"use client";

import { Skeleton } from "@/components/terrorui/skeleton";

export default function HeroSectionSkeleton() {
  return (
    <section className="relative min-h-[calc(80vh-56px)] md:min-h-[calc(80vh-64px)] flex items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto py-12 md:py-0">
        <Skeleton className="h-24 md:h-40 w-full max-w-4xl mx-auto mb-6 md:mb-8" />
        <Skeleton className="h-8 md:h-10 w-full max-w-2xl mx-auto mb-8 md:mb-10" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Skeleton className="h-12 w-64" />
        </div>
      </div>
    </section>
  );
}
