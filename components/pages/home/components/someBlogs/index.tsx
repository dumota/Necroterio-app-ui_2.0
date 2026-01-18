"use client";
import { FeatureCard } from "@/components/terrorui/feature-card";
import { IBlogsHome } from "@/types/BlogsHome";
import { useRouter } from "next/navigation";
import { Carousel } from "@/components/retroui/Carousel";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { useRecentBlogs } from "./UseRecentBlogs";
import { Button } from "@/components/terrorui/button";

export default function SomeBlogs({ blogs }: { blogs: IBlogsHome[] }) {
  const router = useRouter();

  const { exampleBlogs, nextBlog, prevBlog } = useRecentBlogs();


  // Combinando blogs existentes com exemplos
  const b = [...(blogs || []), ...exampleBlogs];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <h1 className="sm:text-2xl text-xl font-bold">
          POSTAGENS RECENTES
        </h1>
      </div>
      {/* mobile version */}
      <div className="block lg:hidden">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <Carousel.Content className="-ml-2 md:-ml-4">
            {b.map((blog) => (
              <Carousel.Item key={blog._id} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                <FeatureCard
                  image={blog.thumbnail || ""}
                  title={blog.title}
                  description={blog.description}
                  showGlitch={true}
                  showBloodDrip={true}
                  onClick={() => router.push(`/blog/${blog._id}/detail`)}
                  className="w-full cursor-pointer"
                />
              </Carousel.Item>
            ))}
          </Carousel.Content>
          <Carousel.Previous id="previous-blog" className="hidden" />
          <Carousel.Next id="next-blog" className="hidden" />
        </Carousel>
        <div className="flex justify-between items-center text-sm mt-5">

          <button id="previous-blog" className="flex items-center gap-2" onClick={prevBlog}>
            <ArrowLeft className="w-4 h-4" /> ver menos
          </button>

          <button id="next-blog" className="flex items-center gap-2" onClick={nextBlog}>
            ver mais <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid para desktop */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl w-full p-4 mx-auto">
        {b.map((blog) => (
          <FeatureCard
            key={blog._id}
            image={blog.thumbnail || ""}
            title={blog.title}
            description={blog.description}
            showGlitch={true}
            showBloodDrip={true}
            onClick={() => router.push(`/blog/${blog._id}/detail`)}
            className="w-full lg:w-[320px] cursor-pointer"
          />
        ))}

      </div>
      <div className="flex items-center justify-center">
        <Button variant="link">Investigar <Search className="w-4 h-4" /></Button>
      </div>
    </div>
  );
}




