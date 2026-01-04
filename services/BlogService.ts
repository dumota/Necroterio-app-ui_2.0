import { IBlog } from "@/types/Blog";
import { IResponseApi } from "@/types/ResponseApi";
import { getApiV2 } from "./FetchData";
const getBlogDetailById = async (id: string) => {
  try {
    const response = await getApiV2<IBlog>(`blogDetail/${id}`);
    return response;
  } catch (error) {
    return error as IResponseApi<IBlog>;
  }
};
export default getBlogDetailById;
