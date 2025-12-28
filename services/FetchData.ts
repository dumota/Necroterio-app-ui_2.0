import { IResponseApi } from "@/types/ResponseApi";
import service, { ApiError } from "./ApiInstance";


const postApi = async <T>(url:string, post : T) => {
    const response = await service.post(url, post);
    return response.data;
}

const getApi = async <T>(url:string) : Promise<T> => {
    const response = await service.get<T>(url);
    return response.data;
}

const postApiV2 = async <TResponse, TRequest>(
    url: string,
    post: TRequest
  ): Promise<IResponseApi<TResponse>> => {
    try {
      const response = await service.post<TResponse>(url, post);
  
      return {
        status: response.status,
        data: response.data,
        message: "Sucesso",
      };
    } catch (error) {
      const err = error as ApiError;
  
      return {
        status: err.status,
        data: null,
        message: err.message,
      };
    }
  };
export { postApi, getApi,postApiV2};