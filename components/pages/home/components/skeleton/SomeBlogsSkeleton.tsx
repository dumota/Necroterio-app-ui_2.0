"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/retroui/Card";

export default function SomeBlogsSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {/* Title skeleton */}
      <div className="flex items-center justify-center">
        <Skeleton className="h-8 w-48 sm:w-64" />
      </div>
      
      {/* Blogs grid skeleton */}
      <div className="flex lg:flex-row flex-wrap gap-2 lg:px-4 justify-center items-center">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="lg:w-[320px] lg:h-[400px] w-[250px] h-[300px] shadow-none">
            <Card.Content>
              <Skeleton className="lg:h-[200px] h-[100px] w-full" />
            </Card.Content>
            <Card.Header>
              <Skeleton className="h-6 w-3/4 mb-2" />
            </Card.Header>
            <Card.Content className="flex flex-col items-center">
              <Skeleton className="h-10 w-full" />
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
}
