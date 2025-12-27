

export interface IUser{
    _id: string;
    avatar: string;
    role: string;
    type: string;
    status: boolean;
    followers: string[];
    following: string[];
    saved: string[];
    name: string;
    account: string;
}