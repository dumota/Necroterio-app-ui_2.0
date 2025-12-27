import BlogsCard from "@/components/ui/BlogsCard";
import { IBlogsHome } from "@/types/BlogsHome";

export default function SomeBlogs({ blogs }: { blogs: IBlogsHome[]})
{
    
    return(
        <div>
            <div className="flex items-center justify-center">
            <h1 className="sm:text-2xl text-xl font-bold">Alguns de nossos blogs</h1>
            </div>
            <div className="flex lg:flex-row flex-col gap-2 lg:px-4 justify-center items-center">
                {blogs.map((blog) => (
                   <BlogsCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    )
}