import { Button } from "@/components/retroui/Button";
import { useComment } from "../../hooks/UseComment";

export default function NewComment() {
  const { register, onSubmit, errors } = useComment();

  return (
    <div>
      <h1>New Comment</h1>
      <form onSubmit={onSubmit}>
        <textarea
          className="px-4 py-2 w-full border-2 shadow-md transition focus:outline-hidden focus:shadow-xs resize-none"
          {...register("content")}
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}

        <div className="flex justify-end">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}
