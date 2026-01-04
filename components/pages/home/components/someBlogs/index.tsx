"use client";
import BlogsCard from "@/components/ui/BlogsCard";
import { IBlogsHome } from "@/types/BlogsHome";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import { EyeIcon } from "lucide-react";

export default function SomeBlogs({ blogs }: { blogs: IBlogsHome[] }) {
  const router = useRouter();
  const BasicCard = ({ blog }: { blog: IBlogsHome }) => {
    return (
      <Card className="lg:w-[320px]  cursor-pointer p-3 gap-2">
        <Card.Header>
          <Card.Title className="text-lg text-center font-semibold text-red-900">{blog.title}</Card.Title>
          <Card.Description className="text-sm text-neutral-950 max-h-[300px] min-h-[100px] overflow-hidden text-ellipsis">
            {blog.description}
          </Card.Description>
          <Button className="w-full mt-4" onClick={() => router.push(`/blog/${blog._id}/detail`)}>
            <div className="flex items-center gap-2 text-center justify-center w-full">
              <EyeIcon className="w-4 h-4" />
              <span className="text-sm">Ver mais</span>
            </div>
          </Button>
        </Card.Header>
      </Card>
    );
  }
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
      <div className="flex lg:flex-row flex-wrap gap-2 lg:px-4 justify-center items-center mb-2">
        {blogs.map((blog) => (
          // <BlogsCard key={blog._id} blog={blog} onClick={() => router.push(`/blog/${blog._id}/detail`)} />
          <BasicCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}



 
