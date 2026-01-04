import { Avatar } from "@/components/retroui/Avatar";
import { IReplyBlog } from "@/types/CommentsBlog";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function RootComment(comment: IReplyBlog) {
  console.log(comment);
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1 rounded-lg">
          <div className="flex flex-col gap-2  max-w-[150px] min-w-[150px]  items-center">
            <Avatar>
              <AvatarImage src={comment.user.avatar} />
            </Avatar>
            <div className="text-sm">{comment.user.name}</div>
          </div>
          <div className="text-md bg-primary/30 border-2 border-neutral-300 flex  overflow-auto p-2 w-full">
            <div dangerouslySetInnerHTML={{ __html: comment.content }} />
          </div>
        </div>
        {comment.replyCM && (
          <div className="border-r border-red-600">
            {comment.replyCM.map((rp, index) => {
              return (
                <div key={index} className="ml-10 border-r border-green-600">
                  <div className="text-sm text-blue-600">
                    {rp.user.name} reply to {rp.reply_user?.name}
                  </div>
                  <RootComment {...rp} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
