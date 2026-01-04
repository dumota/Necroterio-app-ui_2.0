import z from "zod";


export const NewcommentSchema = z.object({
    content : z.string().min(1, { message: "Content is required" }).trim(),
})

export type INewCommentSchema = z.infer<typeof NewcommentSchema>;