import { Card } from "@/components/retroui/Card";

export interface IHeaderBlogProps {
  title: string;
  createdAt: string;
  userName: string;
}

export const HeaderBlog = ({
  title,
  createdAt,
  userName,
}: IHeaderBlogProps) => {
  return (
    <div className="w-full flex flex-col gap-2 p-2 md:text-lg text-md">
      <div>
        <Card.Title className="text-center md:text-2xl text-xl">{title}</Card.Title>
        <div className="flex flex-col gap-2 text-right items-end md:text-lg text-sm w-full">
          <div>Publicado em {createdAt}</div>
          <div>Por {userName}</div>
        </div>
      </div>
    </div>
  );
};
