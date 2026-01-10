import CreateBlogForm from "@/components/pages/blogs/createBlogForm";
import { Suspense } from "react";


export default function NewBlogPage() {
  return (
   <Suspense fallback={<div>Loading...</div>}>
    <CreateBlogForm />
   </Suspense>
  );
}