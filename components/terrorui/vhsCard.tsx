import { Eye, Heart, MessageCircle } from "lucide-react";
import RecIndicator from "../effects/recIndicator";
import CategoryTag from "../terrorui/categoryTag";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  authorAvatar?: string;
  date: string;
  category: string;
  image?: string;
  views: number;
  likes: number;
  comments: number;
}

const BlogCard = ({
  title,
  excerpt,
  author,
  authorAvatar,
  date,
  category,
  image ,
  views,
  likes,
  comments,
}: BlogCardProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <article className="group card-hover bg-card rounded-sm overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300">
      {/* Image Section */}
      {image ? (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image ?? "/images/default-image.jpg"}
            width={500}
            height={500}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
          
          {/* Category & REC overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <CategoryTag category={category} />
          </div>
          <div className="absolute top-3 right-3">
            <RecIndicator />
          </div>
          
          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display text-lg font-semibold text-foreground leading-tight line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
      ):(
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={"/assets/not-found-img.png"}
            width={500}
            height={500}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4">
        {/* For cards without image, show category and title here */}
        {!image && (
          <>
            <div className="flex items-center justify-between mb-3">
              <CategoryTag category={category} />
              <RecIndicator />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground leading-tight mb-2 line-clamp-2">
              {title}
            </h3>
          </>
        )}

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {excerpt}
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-muted overflow-hidden flex items-center justify-center">
            {authorAvatar ? (
              <Image src={authorAvatar ?? "/images/default-image.jpg"} width={500} height={500} alt={author} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs font-vhs text-muted-foreground">
                {author.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-foreground">{author}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-primary font-vhs">{date}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-vhs">{formatNumber(views)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-vhs">{formatNumber(likes)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-vhs">{formatNumber(comments)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
