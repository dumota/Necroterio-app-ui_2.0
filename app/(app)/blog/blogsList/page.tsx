import ListBlogs from "@/components/pages/blogs/listBlogs";
import { getBlogsByQuery } from "@/services/BlogService";

interface SearchParams {
    page?: string;
    limit?: string;
    category?: string;
}

export default async function BlogsList({ 
    searchParams 
}: { 
    searchParams: Promise<SearchParams> 
}) {
    const params = await searchParams;
    const page = params.page ?? '1';
    const limit = params.limit ?? '10';
    const category = params.category ?? '';
    const initialData = await getBlogsByQuery(`page=${page}&limit=${limit}&category=${category}`);
    const blogs = initialData.data?.blogs ?? [];
  


    return (
        <div>
            <ListBlogs blogs={blogs} />
        </div>
    )
}