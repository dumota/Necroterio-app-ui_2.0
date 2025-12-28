import { ILoginRequest, ILoginResponse } from "@/types/Auth";
import { postApiV2 } from "./FetchData";
import { IResponseApi } from "@/types/ResponseApi";

const login = async (account: string, password: string):Promise<IResponseApi<ILoginResponse>> => {
  try {
    const response = await postApiV2<ILoginResponse,ILoginRequest>("/login", {
      account,
      password,
    });
    return response;
  } catch (err) {
    return err as IResponseApi<ILoginResponse>;
  }
};

export { login };
