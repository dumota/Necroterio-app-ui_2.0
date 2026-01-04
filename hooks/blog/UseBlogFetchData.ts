import { getBlogDetailById, getCommentsBlogById } from "@/services/BlogService";
import { IBlog } from "@/types/Blog";
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