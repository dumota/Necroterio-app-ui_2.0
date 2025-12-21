export interface ICategory {
    rotateStyle: string;
    marginStyle: string;
    thumbnail: string;
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface ICategoryResponse {
    categories: ICategory[];
}