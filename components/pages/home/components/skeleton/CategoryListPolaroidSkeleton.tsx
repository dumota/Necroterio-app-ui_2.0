"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Carousel } from "@/components/retroui/Carousel";

export default function CategoryListPolaroidSkeleton() {

  const positions = [5,8,-5,-8] as const;

  return (
    <>
      {/* Mobile version - Carousel */}
      <div className="block lg:hidden">
        <Carousel className="w-full">
          <Carousel.Content>
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <div className="bg-neutral-50 lg:w-full w-[200px] lg:h-[300px] h-[250px] p-4 border-2 border-neutral-200" style={{ transform: `rotate(${positions[index]}deg)` }}>
                  <Skeleton className="w-[200px] lg:h-[150px] h-[100px] mb-4" />
                  <div className="py-4 flex justify-center items-center">
                    <Skeleton className="h-6 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel.Content>
          <Carousel.Previous id="previous-polaroid" className="hidden"/>
          <Carousel.Next id="next-polaroid" className="hidden"/>
        </Carousel>
        <div className="flex justify-between items-center text-sm mt-5">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      {/* Desktop version - Grid */}
      <div className="hidden lg:flex flex-row justify-center gap-2 mt-10">
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <div className="bg-neutral-50 w-full h-[300px] p-4 border-2 border-neutral-200 " style={{ transform: `rotate(${positions[index]}deg)` }}>
              <Skeleton className="w-[200px] h-[150px] mb-4" />
              <div className="py-4 flex justify-center items-center">
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
