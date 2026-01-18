"use client";
import { FeatureCard } from "@/components/terrorui/feature-card";
import { IBlogsHome } from "@/types/BlogsHome";
import { useRouter } from "next/navigation";

export default function SomeBlogs({ blogs }: { blogs: IBlogsHome[] }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">

      <div className="flex items-center justify-center">
        <h1 className="sm:text-2xl text-xl font-bold">
          POSTAGENS RECENTES
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col gap-4 justify-center">
        {(blogs || []).map((blog) => (
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
    </div>
  );
}




