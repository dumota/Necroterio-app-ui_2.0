import { getApi } from "./FetchData";
import { ICategoryResponse } from "@/types/Category";

export const getCategories = async (): Promise<ICategoryResponse> => {
  return getApi<ICategoryResponse>("category");
};
