"use client";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { IBlogByCategoryResponse } from "@/types/Blog";
import { useRouter } from "next/navigation";

export interface iListByCategoryProps {
  data: IBlogByCategoryResponse;
}
export default function ListByCategory({ data }: iListByCategoryProps) {

  const router = useRouter();
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {data.blogs.map((blog) => (
          <Card key={blog._id} className="w-[400px]">
            <Card.Header>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Description>{blog.description}</Card.Description>
              <Card.Content>
                <Button variant="outline" size="sm" onClick={() => router.push(`/blog/${blog._id}/edit`)}>Editar</Button>
              </Card.Content>

            </Card.Header>
          </Card>
        ))}
      </div>

      {/* {data.count} */}
    </>
  );
}
