"use client";
import { useBlogFetchData } from "@/hooks/blog/UseBlogFetchData";
import { useParams } from "next/navigation";
import { HeaderBlog } from "./components/Header";
import Content from "./components/content";
import Coments from "./components/coments";
import SkeletonBlogDetail from "./components/skeleton";
import NewComment from "./components/coments/NewComment";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useBlogFetchData({ id: id as string });
  if (isLoading) {
    return <SkeletonBlogDetail />;
  }
  if(error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col gap-4 p-5 px-6 lg:px-10">
       <HeaderBlog title={data?.data?.title ?? ""} createdAt={data?.data?.createdAt ?? ""} userName={data?.data?.user.name ?? ""} />
       <Content content={data?.data?.content ?? ""} />
       <NewComment />
       <Coments blog_id={id ?? ""} />
    </div>
  );
}
