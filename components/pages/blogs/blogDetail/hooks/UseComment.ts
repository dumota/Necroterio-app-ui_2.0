import { INewCommentSchema, NewcommentSchema } from "@/schemas/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useComment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<INewCommentSchema>({
    resolver: zodResolver(NewcommentSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });


  return {
    register,
    onSubmit,
    errors: errors,
  };
};
