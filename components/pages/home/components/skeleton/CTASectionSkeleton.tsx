"use client";

import { Skeleton } from "@/components/terrorui/skeleton";

export default function CTASectionSkeleton() {
  return (
    <section className="flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="border-4 border-primary/30 bg-card p-8 md:p-12">
          <Skeleton className="h-12 md:h-16 w-full max-w-xl mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <Skeleton className="w-12 h-12 rounded-full mb-3" />
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-3 w-32" />
              </div>
            ))}
          </div>
          
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
    </section>
  );
}
