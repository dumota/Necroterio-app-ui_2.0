"use client";

import PaginationGeneric from "@/components/common/pagination";
import { FeatureCard } from "@/components/terrorui/feature-card";
import { useBlogsByQueryFetchData } from "@/hooks/blog/UseBlogFetchData";
import { IBlog } from "@/types/Blog";
import { useRouter } from "next/navigation";
import FiltersSection from "./components/FiltersSection";
import HeaderListBlogs from "./components/Header";
import NotFound from "./components/notFound";
import VhsCard from "@/components/terrorui/vhsCard";



export default function ListBlogs({ blogs }: { blogs: IBlog[] }) {
    const router = useRouter();
    const { data, isLoading } = useBlogsByQueryFetchData(blogs);


    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">


            <HeaderListBlogs count={data?.data?.count ?? 0} />
            <FiltersSection />

            <main className="mx-auto px-4 py-6 md:py-8">
                {blogs.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {data?.data?.blogs?.map((blog) => (
                                // <FeatureCard
                                //     key={blog._id}
                                //     title={blog.title}
                                //     description={blog.description}
                                //     image={blog.thumbnail ?? "assets/default-bg-blog.jpg"}
                                //     onClick={() => {
                                //         router.push(`/blog/${blog._id}`);
                                //     }}
                                // />
                                <VhsCard
                                    key={blog._id}
                                    title={blog.title}
                                    excerpt={blog.description}
                                    image={blog.thumbnail ?? "assets/default-bg-blog.jpg"}
                                    author={blog.user?.name ?? ""}
                                    authorAvatar={blog.user?.avatar ?? ""}
                                    date={blog.createdAt}
                                    category={blog.category?.name ?? ""}
                                    views={10}
                                    likes={blog.likes.length}
                                    comments={10}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-5">

                            <PaginationGeneric
                                currentPage={data?.data?.currentPage ?? 1}
                                totalPages={data?.data?.count ?? 0}
                                onPageChange={(page) => {
                                    const newIrlParamsn = new URLSearchParams(window.location.search);
                                    newIrlParamsn.set("page", page.toString());
                                    router.push(`/blog/blogsList?${newIrlParamsn.toString()}`);
                                }}
                            />
                        </div>



                    </>
                ) : (
                    <NotFound />
                )}
            </main>



        </div>
    )
}