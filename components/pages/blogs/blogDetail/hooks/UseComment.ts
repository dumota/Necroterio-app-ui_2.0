import { useGlobalLoading } from "@/providers/GlobalLoading";
import { INewCommentSchema, NewcommentSchema } from "@/schemas/comment.schema";
import { createCommentBlog } from "@/services/BlogService";
import { IBlog } from "@/types/Blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface IUseCommentProps {
  blog?: IBlog | null;
}

export const useComment = ({ blog }: IUseCommentProps) => {
  const { hide, show } = useGlobalLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewCommentSchema>({
    resolver: zodResolver(NewcommentSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    show();
    console.log(data);
    const response = await createCommentBlog({
      content: data.content,
      blog_id: blog?._id ?? "",
      blog_user_id: blog?.user._id ?? "",
    });
    hide();
    if (response.status === 200) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  });

  return {
    register,
    onSubmit,
    errors: errors,
  };
};
