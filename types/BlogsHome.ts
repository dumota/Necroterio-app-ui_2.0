import { ICategory } from "./Category";
import { IUser } from "./User";

export interface IBlogsHome {
  _id: string;
  likes: string[];
  status: boolean;
  avaliation: boolean;
  user: IUser[];
  title: string;
  content: string;
  description: string;
  thumbnail: string;
  category: ICategory;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBlogsHomeResponse{
    blogs: IBlogsHome[];
}