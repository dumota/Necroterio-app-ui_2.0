"use client";

import { Skeleton } from "@/components/terrorui/skeleton";

export default function SomeBlogsSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {/* Title skeleton */}
      <div className="flex items-center justify-center">
        <Skeleton className="h-8 w-48 sm:w-64" />
      </div>
      
      {/* Blogs grid skeleton */}
      <div className="flex lg:flex-row flex-col gap-4 justify-center">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-full lg:w-[320px] bg-card border border-border overflow-hidden">
            <Skeleton className="h-48 md:h-64 w-full" />
            <div className="p-4 md:p-6">
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
