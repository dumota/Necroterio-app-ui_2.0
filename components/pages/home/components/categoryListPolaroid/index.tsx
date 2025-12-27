"use client";
import { Carousel } from "@/components/retroui/Carousel";
import PolaroidCard from "@/components/ui/PolaroidCard";
import { ICategory } from "@/types/Category";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface iCategoryListPolaroidProps {
  categories: ICategory[];
}

export default function CategoryListPolaroid({
  categories,
}: iCategoryListPolaroidProps) {

  const nextPolaroid = () => {
    const nextButton = document.getElementById("next-polaroid");
    nextButton?.click();
  };
  const lastPolaroid = () => {
    const lastButton = document.getElementById("previous-polaroid");
    lastButton?.click();
  };

  return (
    <>
      <div className="block lg:hidden">
        <Carousel className="w-full">
          <Carousel.Content>
            {categories.map((category) => {
              return (
                <div key={category._id}>
                  <PolaroidCard
                    imageUrl={category.thumbnail}
                    description={category.name}
                    rotate={Number(category.rotateStyle || 0)}
                  />
                </div>
              );
            })}
          </Carousel.Content>
          <Carousel.Previous id="previous-polaroid" className="hidden"/>
          <Carousel.Next id="next-polaroid" className="hidden"/>
        </Carousel>
        <div className="flex justify-between items-center text-sm mt-5">
     
          <button  className="flex items-center gap-2" onClick={lastPolaroid}>
          <ArrowLeft className="w-4 h-4" /> ver menos 
          </button>
       
          <button className="flex items-center gap-2" onClick={nextPolaroid}>
            ver mais <ArrowRight className="w-4 h-4" />
          </button>
      </div>
        </div>

      <div className="hidden lg:flex flex-row justify-center gap-2 mt-10">
        {categories.map((category) => {
          return (
            <div key={category._id}>
              <PolaroidCard
                imageUrl={category.thumbnail}
                description={category.name}
                rotate={Number(category.rotateStyle || 0)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
