import { getBlogDetailById, getBlogsByQuery, getCommentsBlogById } from "@/services/BlogService";
import { IBlog } from "@/types/Blog";
import { ICommentsBlogResponse } from "@/types/CommentsBlog";
import { IResponseApi } from "@/types/ResponseApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export interface IUseBlogFetchData {
    id: string;
}
export const useBlogFetchData = ({id}: IUseBlogFetchData) => {
    return useQuery<IResponseApi<IBlog>, Error>({
        queryKey: ["blog", id],
        queryFn: () => getBlogDetailById(id),
    });
}

export const useCommentsBlogFetchData = ({id}: IUseBlogFetchData) => {
    return useQuery<IResponseApi<ICommentsBlogResponse>, Error>({
        queryKey: ["commentsBlog", id],
        queryFn: () => getCommentsBlogById(id),
    });
}
export const useBlogsByQueryFetchData = (initialData: IBlog[]) => {
    const searchParams = useSearchParams();
    console.log( "searchParams", searchParams);
  
    const page = searchParams.get("page") ?? "1";
    const limit = searchParams.get("limit") ?? "10";
    const category = searchParams.get("category") ?? "";
    const author = searchParams.get("author") ?? "";
    const title = searchParams.get("title") ?? "";
  
    const queryString = `page=${page}&limit=${limit}&category_id=${category}&author=${author}&title=${title}`;
  
    return useQuery({
      queryKey: ["blogsByQuery", page, limit, category],
      queryFn: () => getBlogsByQuery(queryString),
      initialData: {
        data: {
          blogs: initialData,
          count: initialData.length,
          totalPages: 1,
          currentPage: Number(page),
          limit: Number(limit),
        },
        message: "Blogs fetched successfully",
        status: 200,
      },
    });
  };