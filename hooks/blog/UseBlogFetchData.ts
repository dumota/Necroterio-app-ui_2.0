import getBlogDetailById from "@/services/BlogService";
import { IBlog } from "@/types/Blog";
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