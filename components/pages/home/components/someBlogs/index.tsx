"use client";
import BlogsCard from "@/components/ui/BlogsCard";
import { IBlogsHome } from "@/types/BlogsHome";
import { motion } from "framer-motion";

export default function SomeBlogs({ blogs }: { blogs: IBlogsHome[] }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center">
          <h1 className="sm:text-2xl text-xl font-bold">
            Alguns de nossos blogs
          </h1>
        </div>
      </motion.div>
      <div className="flex lg:flex-row flex-wrap gap-2 lg:px-4 justify-center items-center">
        {blogs.map((blog) => (
          <BlogsCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
