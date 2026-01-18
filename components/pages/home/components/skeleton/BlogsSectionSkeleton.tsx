"use client";

import { Skeleton } from "@/components/terrorui/skeleton";

export default function BlogsSectionSkeleton() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 w-full">
          <Skeleton className="h-10 md:h-12 w-full max-w-2xl mx-auto mb-2" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-10 w-24 md:w-32 rounded-full" />
          ))}
        </div>

        <div className="relative mx-auto md:-mx-16">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="shrink-0 mx-1">
                <div className="relative bg-card border-y-8 border-card">
                  <div className="w-32 h-24 overflow-hidden">
                    <Skeleton className="w-full h-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
