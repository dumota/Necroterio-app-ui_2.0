import { IUser } from "./User";


export interface ILoginResponse {
    msg: string;
    access_token: string;
    user: IUser;
}

export interface ILoginRequest {
    account: string;
    password: string;
}