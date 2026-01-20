
import { cn } from "@/lib/utils";

interface CategoryTagProps {
  category: string;
  className?: string;
}

const categoryColors: Record<string, string> = {
  "Terror Clássico": "bg-primary/90",
  "Slasher": "bg-primary/90",
  "Trash/B-Movie": "bg-primary/90",
  "Giallo": "bg-amber-700/90",
  "Sobrenatural": "bg-violet-800/90",
  "Terror": "bg-primary/90",
  "Gore": "bg-rose-900/90",
  "Cult": "bg-emerald-800/90",
};

const CategoryTag = ({ category, className }: CategoryTagProps) => {
  const bgColor = categoryColors[category] || "bg-primary/90";
  
  return (
    <span 
      className={cn(
        "px-2 py-0.5 text-xs font-vhs tracking-wider text-primary-foreground uppercase",
        bgColor,
        className
      )}
    >
      {category}
    </span>
  );
};

export default CategoryTag;
