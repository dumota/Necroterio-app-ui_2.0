"use client";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { IBlogsHome } from "@/types/BlogsHome";
import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
export default function BlogsCard({ blog }: { blog: IBlogsHome }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <Card className="lg:w-[320px] lg:h-[400px] w-[250px] h-[300px] shadow-none hover:shadow-none cursor-pointer">
        <Card.Content>
          <div className="lg:h-[200px] h-[100px] object-cover sm:w-full">
            <Image
              src={blog.thumbnail}
              className="w-full h-full"
              alt={blog.title}
              width={250}
              height={150}
            />
          </div>
        </Card.Content>
        <Card.Header>
          <Card.Title className="text-lg font-semibold text-red-900">
            {blog.title}
          </Card.Title>
        </Card.Header>
        <Card.Content className="flex flex-col items-center text-sm">
          {/* <p className="text-lg font-semibold max-w-[320px] overflow-x-hidden text-ellipsis max-height-[20px] ">{blog.description}</p> */}
          <Button className="w-full">
            <div className="flex items-center gap-2 text-center justify-center w-full">
              <EyeIcon className="w-4 h-4" />
              <span className="text-sm">Ver mais</span>
            </div>
          </Button>
        </Card.Content>
      </Card>
    </motion.div>
  );
}
