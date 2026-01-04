export interface IContentProps {
  content: string;
}

export default function Content({ content }: IContentProps) {
  return (
    <div className="bg-neutral-100 p-5 rounded-lg md:text-lg text-md">

        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}