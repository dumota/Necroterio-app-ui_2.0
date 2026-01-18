import { getBlogDetailById, getBlogsByQuery, getCommentsBlogById } from "@/services/BlogService";
import { IBlog, IBlogByQueryResponse } from "@/types/Blog";
import { ICommentsBlogResponse } from "@/types/CommentsBlog";
import { IResponseApi } from "@/types/ResponseApi";
import { useQuery } from "@tanstack/react-query";

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

export const useBlogsByQueryFetchData = (query: string, initialData: IBlog[]) => {
    return useQuery<IResponseApi<IBlogByQueryResponse>, Error>({
        queryKey: ["blogsByQuery", query],
        queryFn: () => getBlogsByQuery(query),
        initialData: {
            data: {
                blogs: initialData,
                count: initialData.length,
                totalPages: 1,
                currentPage: 1,
                limit: 10,
            },
            message: "Blogs fetched successfully",
            status: 200,
        },
    });
}