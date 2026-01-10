import { postApiV2, getApiV2 } from "./FetchData";
import { IResponseApi } from "@/types/ResponseApi";
import service from "./ApiInstance";
import {
  ICommentsBlogResponse,
  ICreateCommentBlog,
  IReplyBlog,
} from "@/types/CommentsBlog";
import { IBlog, IBlogResponse, ICreateBlogRequest } from "@/types/Blog";



const createBlog = async (
  data: ICreateBlogRequest
): Promise<IResponseApi<IBlogResponse>> => {
  return postApiV2<IBlogResponse, ICreateBlogRequest>("blog", data);
};

const updateBlog = async (
  id: string,
  data: Partial<ICreateBlogRequest>
): Promise<IResponseApi<IBlog>> => {
  try {
    const response = await service.put<IBlog>(`blogs/${id}`, data);
    return {
      status: response.status,
      data: response.data,
      message: "Sucesso",
    };
  } catch (err: unknown) {
    const error = err as { response?: { status?: number; data?: { msg?: string } }; message?: string };
    return {
      status: error.response?.status || 500,
      data: null,
      message: error.response?.data?.msg || error.message || "Erro ao atualizar blog",
    };
  }
};


const getBlogDetailById = async (id: string): Promise<IResponseApi<IBlog>> => {
  try {
    const response = await getApiV2<IBlog>(`blogDetail/${id}`);
    return response;
  } catch (error) {
    return error as IResponseApi<IBlog>;
  }
};


const createCommentBlog = async (comment: ICreateCommentBlog) => {
  try {
    const response = await postApiV2<IReplyBlog, ICreateCommentBlog>(
      `comment`,
      comment
    );
    return response;
  } catch (error) {
    return error as IResponseApi<IReplyBlog>;
  }
};

const getCommentsBlogById = async (blog_id: string) => {
  try {
    const response = await getApiV2<ICommentsBlogResponse>(
      `comments/blog/${blog_id}`
    );
    return response;
  } catch (error) {
    return error as IResponseApi<ICommentsBlogResponse>;
  }
};

export {
  createBlog,
  updateBlog,
  getBlogDetailById,
  createCommentBlog,
  getCommentsBlogById,
};
