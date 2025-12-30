

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

export interface IProfile{
    avatar: string;
    role: string;
    type: string;
    status: boolean;
    followers: string[];
    following: string[];
    saved: string[];
    _id: string;
    name: string;
    account: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    rf_token: string;
}