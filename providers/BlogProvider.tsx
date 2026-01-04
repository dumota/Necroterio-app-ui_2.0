import { IBlog } from "@/types/Blog";
import { createContext, useContext, useState } from "react";

interface IBlogContextType{
    blog: IBlog;
}


const BlogContext = createContext<IBlogContextType>({ blog: {} as IBlog });

export function BlogProvider({ children, initialBlog }: { children: React.ReactNode, initialBlog: IBlog }) {
    const [blog, setBlog] = useState<IBlog>(initialBlog);
    return (
        <BlogContext.Provider value={{ blog }}>
            {children}
        </BlogContext.Provider>
    );
}

export function useBlogContext() {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlog must be used within a BlogProvider");
    }
    return context;
}