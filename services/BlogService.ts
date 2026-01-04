import { IBlog } from "@/types/Blog";
import { IResponseApi } from "@/types/ResponseApi";
import { getApiV2 } from "./FetchData";
import { ICommentsBlogResponse } from "@/types/CommentsBlog";


const getBlogDetailById = async (id: string) => {
  try {
    const response = await getApiV2<IBlog>(`blogDetail/${id}`);
    return response;
  } catch (error) {
    return error as IResponseApi<IBlog>;
  }
};

const getCommentsBlogById = async (blog_id: string) => {
  try {
    const response = await getApiV2<ICommentsBlogResponse>(`comments/blog/${blog_id}`);
    return response;
  } catch (error) {
    return error as IResponseApi<ICommentsBlogResponse>;
  }
};

export { getBlogDetailById, getCommentsBlogById };
