import BlogForm from "@/components/pages/blogs/createBlogForm";

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  return <BlogForm blogId={id} />;
}
