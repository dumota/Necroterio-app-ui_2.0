import CategoryListPolaroidSkeleton from "./CategoryListPolaroidSkeleton";
import SomeBlogsSkeleton from "./SomeBlogsSkeleton";
import InfosSkeleton from "./InfosSkeleton";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col gap-14 lg:py-0 py-5">
      <CategoryListPolaroidSkeleton />
      <InfosSkeleton />
      <SomeBlogsSkeleton />
    </div>
  );
}

export { CategoryListPolaroidSkeleton, SomeBlogsSkeleton, InfosSkeleton };
