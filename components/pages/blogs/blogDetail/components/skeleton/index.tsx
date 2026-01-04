import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonBlogDetail() {
    return (
        <div>
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
        </div>
    );
}