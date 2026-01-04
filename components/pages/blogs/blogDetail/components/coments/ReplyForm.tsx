"use client";

import { Button } from "@/components/retroui/Button";
import { INewCommentSchema, NewcommentSchema } from "@/schemas/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

export interface IReplyFormProps {
  commentId: string;
  replyToUser?: string;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function ReplyForm({
  commentId,
  replyToUser,
  onCancel,
  onSuccess,
}: IReplyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<INewCommentSchema>({
    resolver: zodResolver(NewcommentSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // TODO: Implementar chamada à API para criar resposta
      console.log("Replying to comment:", commentId, data);
      // await createReply(commentId, data.content);
      
      reset();
      onSuccess();
    } catch (error) {
      console.error("Error creating reply:", error);
    }
  });

  return (
    <div className="border-2 border-neutral-300 rounded-lg p-4 bg-neutral-50/50 mt-2">
      {replyToUser && (
        <div className="text-sm text-neutral-600 mb-2">
          Respondendo para <span className="font-semibold">{replyToUser}</span>
        </div>
      )}
      
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <textarea
          className="px-4 py-2 w-full border-2 border-neutral-300 rounded shadow-md transition focus:outline-hidden focus:shadow-xs focus:border-primary resize-none min-h-[100px]"
          placeholder="Escreva sua resposta..."
          {...register("content")}
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onCancel}
            className="flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Cancelar
          </Button>
          <Button type="submit" size="sm">
            Enviar Resposta
          </Button>
        </div>
      </form>
    </div>
  );
}
