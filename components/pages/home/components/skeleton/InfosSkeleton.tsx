"use client";

import { Card } from "@/components/retroui/Card";
import { Skeleton } from "@/components/ui/skeleton";

export default function InfosSkeleton() {
  return (
    <div className="flex flex-col gap-8 px-4">
      {/* Header skeleton */}
      <div className="text-center">
        <Skeleton className="h-10 w-80 mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </div>

      {/* Cards grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[...Array(4)].map((_, index) => (
          <Card key={index} className="h-full border-2 border-neutral-300">
            <Card.Header>
              <div className="flex items-center gap-3 mb-3">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <Skeleton className="h-6 flex-1" />
              </div>
            </Card.Header>
            <Card.Content>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
}
