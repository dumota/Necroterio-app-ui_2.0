"use client";
import { Carousel } from "@/components/retroui/Carousel";
import { Polaroid } from "@/components/terrorui/polaroid";
import { ICategory } from "@/types/Category";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export interface iCategoryListPolaroidProps {
  categories: ICategory[];
}

export default function CategoryListPolaroid({
  categories,
}: iCategoryListPolaroidProps) {

  const router = useRouter();
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
      <div className="w-full text-center">
        <h2 className="lg:text-4xl text-2xl font-bold ">
          HISTORIAS DIVIDIDAS POR CATEGORIAS
        </h2>
        <p className="lg:text-lg text-sm text-muted-foreground">
          Encontre seu gênero de terror favorito
        </p>
      </div>
      <div className="block lg:hidden">
        <Carousel className="w-full">
          <Carousel.Content>
            {categories.map((category) => {
              return (
                <div key={category._id}>

                  <Polaroid img={category.thumbnail} 
                  showScratches={false} 
                  showBloodStain={false} 
                  showTape={false} 
                  onClick={() => router.push(`/blog/category/${category._id}`)} 
                  caption={category.name} 
                  rotation={Number(category.rotateStyle || 0)}
                  className="w-full h-full"
                  />
                </div>
              );
            })}
          </Carousel.Content>
          <Carousel.Previous id="previous-polaroid" className="hidden" />
          <Carousel.Next id="next-polaroid" className="hidden" />
        </Carousel>
        <div className="flex justify-between items-center text-sm mt-5">

          <button className="flex items-center gap-2" onClick={lastPolaroid}>
            <ArrowLeft className="w-4 h-4" /> ver menos
          </button>

          <button className="flex items-center gap-2" onClick={nextPolaroid}>
            ver mais <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-row justify-center gap-6 mt-10">
        {categories.map((category) => {
          return (
            <div key={category._id}>
           
              <Polaroid img={category.thumbnail}
                caption={category.name}
                rotation={Number(category.rotateStyle || 0)}
                onClick={() => router.push(`/blog/category/${category._id}`)}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
