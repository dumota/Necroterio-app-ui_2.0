"use client";

import { Button } from "@/components/terrorui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/terrorui/pagination";
import FiltersSection from "./components/FiltersSection";
import HeaderListBlogs from "./components/Header";
import { IBlog } from "@/types/Blog";
import { FeatureCard } from "@/components/terrorui/feature-card";
import { useRouter } from "next/navigation";
import { getBlogsByQuery } from "@/services/BlogService";
import { useBlogsByQueryFetchData } from "@/hooks/blog/UseBlogFetchData";



export default function ListBlogs({ blogs }: { blogs: IBlog[] }) {
    const router = useRouter();
    const { data, isLoading } = useBlogsByQueryFetchData(`page=${1}&limit=${10}&category=${""}`, blogs);
    

    if(isLoading) {
        return <div>Loading...</div>;
    }


    const totalPages = 1;
    const currentPage = 1;
    const startIndex = 1;
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">


            <HeaderListBlogs />

            <FiltersSection />
            {/* Blog Grid */}
            <main className="relative z-10 container mx-auto px-4 py-6 md:py-8">
                {blogs.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {data?.data?.blogs?.map((blog) => (
                                <FeatureCard
                                 key={blog._id}
                                 title={blog.title} 
                                 description={blog.description} 
                                 image={blog.thumbnail ?? "assets/default-bg-blog.jpg"  }
                                 onClick={() => {
                                    router.push(`/blog/${blog._id}`);
                                 }}
                                 />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-8 flex justify-center">
                                <Pagination>
                                    <PaginationContent className="gap-2">
                                        <PaginationItem>
                                            <PaginationPrevious

                                                className={`cursor-pointer border-blood/50 text-blood hover:bg-blood/10 font-vhs ${currentPage === 1
                                                        ? "pointer-events-none opacity-50"
                                                        : ""
                                                    }`}
                                            />
                                        </PaginationItem>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                            (page) => {
                                                // Show first, last, current, and adjacent pages
                                                if (
                                                    page === 1 ||
                                                    page === totalPages ||
                                                    Math.abs(page - currentPage) <= 1
                                                ) {
                                                    return (
                                                        <PaginationItem key={page}>
                                                            <PaginationLink
                                                                //  onClick={() => setCurrentPage(page)}
                                                                isActive={currentPage === page}
                                                                className={`cursor-pointer font-mono ${currentPage === page
                                                                        ? "bg-blood text-white border-blood"
                                                                        : "border-blood/50 text-blood hover:bg-blood/10"
                                                                    }`}
                                                            >
                                                                {page}
                                                            </PaginationLink>
                                                        </PaginationItem>
                                                    );
                                                }
                                                // Show ellipsis
                                                if (
                                                    (page === 2 && currentPage > 3) ||
                                                    (page === totalPages - 1 &&
                                                        currentPage < totalPages - 2)
                                                ) {
                                                    return (
                                                        <PaginationItem key={page}>
                                                            <PaginationEllipsis className="text-blood" />
                                                        </PaginationItem>
                                                    );
                                                }
                                                return null;
                                            }
                                        )}

                                        <PaginationItem>
                                            <PaginationNext
                                                //   onClick={() =>
                                                //     setCurrentPage((p) => Math.min(totalPages, p + 1))
                                                //   }
                                                className={`cursor-pointer border-blood/50 text-blood hover:bg-blood/10 font-vhs ${currentPage === totalPages
                                                        ? "pointer-events-none opacity-50"
                                                        : ""
                                                    }`}
                                            />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        )}

                        {/* Page Info */}
                        <p className="text-center mt-4 text-muted-foreground font-mono text-sm">
                            Mostrando {startIndex + 1}-
                            {Math.min(startIndex + 1, blogs.length)} de{" "}
                            {blogs.length} blogs
                        </p>
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📼</div>
                        <h3 className="font-creepy text-2xl text-blood mb-2">
                            NENHUM REGISTRO ENCONTRADO
                        </h3>
                        <p className="text-muted-foreground font-mono">
                            Tente ajustar os filtros ou buscar por outros termos
                        </p>
                        <Button
                            // onClick={clearFilters}
                            className="mt-4 bg-blood hover:bg-blood/80 font-vhs"
                        >
                            LIMPAR FILTROS
                        </Button>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-blood/30 py-6">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-muted-foreground font-mono text-sm">
                        ▮▮ PAUSED ▮▮ NECROTERIO ARCHIVES
                    </p>
                </div>
            </footer>
        </div>
    )
}