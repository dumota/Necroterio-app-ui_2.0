"use client";

import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { IReplyBlog } from "@/types/CommentsBlog";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import ReplyForm from "./ReplyForm";

export default function RootComment(comment: IReplyBlog) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  
  const hasReplies = comment.replyCM && comment.replyCM.length > 0;
  
  return (
    <div className="flex flex-col gap-5 border p-2">
      <div className="flex md:flex-row flex-col gap-2">
        <div className="flex md:flex-col flex-row gap-2 md:max-w-[5vw] md:min-w-[5vw] items-center bg-blend-luminosity">
          <Avatar>
            <AvatarImage src={comment.user.avatar} />
          </Avatar>
          <div title={comment.user.name} className="text-sm text-center max-w-[5vw] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap">{comment.user.name}</div>
        </div>
        <div className="flex flex-col gap-2 md:flex-1">
          <div className="md:text-md text-xs bg-primary/30 border-2 border-neutral-300 rounded p-3 overflow-auto h-full">
            <div dangerouslySetInnerHTML={{ __html: comment.content }} />
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            {hasReplies && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    <span className="text-xs hidden md:block">Ocultar respostas ({comment.replyCM.length})</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    <span className="text-xs hidden md:block">Ver respostas ({comment.replyCM.length})</span>
                  </>
                )}
              </Button>
            )}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs text-red-800 hidden md:block">Responder</span>
            </Button>
          </div>

          {/* Reply Form */}
          {showReplyForm && (
            <ReplyForm
              commentId={comment._id}
              replyToUser={comment.user.name}
              onCancel={() => setShowReplyForm(false)}
              onSuccess={() => {
                setShowReplyForm(false);
                if (!isExpanded && hasReplies) {
                  setIsExpanded(true);
                }
              }}
            />
          )}
        </div>
      </div>

      {/* Replies - Only show when expanded */}
      {isExpanded && hasReplies && (
        <div className="ml-6 border-l-2 border-neutral-400 pl-4 flex flex-col gap-3 mt-2">
          {comment.replyCM.map((reply) => (
            <div key={reply._id} className="relative">
              {reply.reply_user && (
                <div className="text-xs text-neutral-500 mb-1">
                  {reply.user.name} respondeu para {reply.reply_user.name}
                </div>
              )}
              <RootComment {...reply} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
