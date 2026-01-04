import { ICategory } from "./Category";
import { IUser } from "./User";

export interface IBlog {
  likes: string[];
  status: boolean;
  avaliation: boolean;
  _id: string;
  user: IUser;
  title: string;
  content: string;
  description: string;
  thumbnail: string;
  category: ICategory;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


