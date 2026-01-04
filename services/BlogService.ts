import { IBlog } from "@/types/Blog";
import { IResponseApi } from "@/types/ResponseApi";
import { getApiV2, postApiV2 } from "./FetchData";
import { ICommentsBlogResponse, ICreateCommentBlog, IReplyBlog } from "@/types/CommentsBlog";


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

const  createCommentBlog = async (comment: ICreateCommentBlog) => {
  try {
    const response = await postApiV2<IReplyBlog, ICreateCommentBlog>(`comment`, comment);
    return response;
  } catch (error) {
    return error as IResponseApi<IReplyBlog>;
  }
};

export { getBlogDetailById, getCommentsBlogById, createCommentBlog };
