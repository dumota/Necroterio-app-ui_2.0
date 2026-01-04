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
    <div className="w-full flex flex-col gap-2 p-2">
      <div>
        <Card.Title className="text-center">{title}</Card.Title>
        <div className="flex flex-col gap-2 text-right items-end  w-full">
          <div>Publicado em {createdAt}</div>
          <div>Por {userName}</div>
        </div>
      </div>
    </div>
  );
};
