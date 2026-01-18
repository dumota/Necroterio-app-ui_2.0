import { Skull, Ghost, Scissors, Eye, Flame, Film } from "lucide-react";

interface BlogsPillProps {
  name: string;
  count?: number;
  icon?: string;
}

const BlogsPill = ({ name, count, icon }: BlogsPillProps) => {
  const getIcon = () => {
    const iconClass = "w-4 h-4";
    switch (icon) {
      case "skull": return <Skull className={iconClass} />;
      case "ghost": return <Ghost className={iconClass} />;
      case "scissors": return <Scissors className={iconClass} />;
      case "eye": return <Eye className={iconClass} />;
      case "flame": return <Flame className={iconClass} />;
      default: return <Film className={iconClass} />;
    }
  };

  return (
    <button className="group flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
      <span className="text-primary group-hover:text-primary transition-colors">
        {getIcon()}
      </span>
      <span className="font-display text-sm text-foreground group-hover:text-primary transition-colors">
        {name}
      </span>
      <span className="font-vhs text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-sm">
        {count}
      </span>
    </button>
  );
};

export default BlogsPill;
