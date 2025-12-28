import { ILoginRequest, ILoginResponse } from "@/types/Auth";
import { postApiV2 } from "./FetchData";

const login = async (account: string, password: string) => {
  try {
    const response = await postApiV2<ILoginResponse,ILoginRequest>("/login", {
      account,
      password,
    });
    return response;
    
  } catch (err) {
    return err;
  }
};

export { login };
