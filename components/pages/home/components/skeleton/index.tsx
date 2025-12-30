import CategoryListPolaroidSkeleton from "./CategoryListPolaroidSkeleton";
import SomeBlogsSkeleton from "./SomeBlogsSkeleton";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col gap-14 lg:py-0 py-5">
      <CategoryListPolaroidSkeleton />
      <SomeBlogsSkeleton />
    </div>
  );
}

export { CategoryListPolaroidSkeleton, SomeBlogsSkeleton };
