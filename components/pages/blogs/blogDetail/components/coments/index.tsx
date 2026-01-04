import { useCommentsBlogFetchData } from "@/hooks/blog/UseBlogFetchData";
import RootComment from "./RootComment";

export interface IComentsProps {
  blog_id: string;
}

export default function Coments({ blog_id }: IComentsProps) {
  const { data, isLoading, error } = useCommentsBlogFetchData({ id: blog_id });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col gap-2">
      {data?.data?.comments.map((comment)=>{
        return (
          <RootComment key={comment._id} {...comment} />
        )
      })}
    </div>
  );
}