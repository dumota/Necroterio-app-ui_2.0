import { IRegisterSchema } from "@/schemas/register.schema";
import { ILoginRequest, ILoginResponse } from "@/types/Auth";
import { IResponseApi } from "@/types/ResponseApi";
import { postApiV2, postApiV3_Message } from "./FetchData";

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

const registerUser = async (data: IRegisterSchema):Promise<IResponseApi<unknown>> => {
  try{
    const response = await postApiV3_Message< IRegisterSchema>("/register", data);
    console.log(response);
    return response;
  } catch (err) {
    return err as IResponseApi<unknown>;
  }
}

export { login, registerUser };

