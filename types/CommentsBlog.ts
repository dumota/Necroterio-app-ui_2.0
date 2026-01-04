export interface IReplyBlog {
    _id: string;
    replyCM: IReplyBlog[];
    user: IReplyUser;
    content: string;
    blog_id: string;
    blog_user_id: string;
    comment_root: string;
    reply_user?: IReplyUser;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IReplyUser{
    _id: string;
    avatar: string;
    name: string;
}

export interface ICommentsBlogResponse {
    comments: IReplyBlog[];
    total: number;
    
}