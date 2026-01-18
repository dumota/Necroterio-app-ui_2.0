import CategoryListPolaroidSkeleton from "./CategoryListPolaroidSkeleton";
import SomeBlogsSkeleton from "./SomeBlogsSkeleton";
import InfosSkeleton from "./InfosSkeleton";
import HeroSectionSkeleton from "./HeroSectionSkeleton";
import BlogsSectionSkeleton from "./BlogsSectionSkeleton";
import CTASectionSkeleton from "./CTASectionSkeleton";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col gap-14 lg:py-0 py-5">
      <HeroSectionSkeleton />
      <CategoryListPolaroidSkeleton />
      <BlogsSectionSkeleton />
      <SomeBlogsSkeleton />
      <CTASectionSkeleton />
    </div>
  );
}

export { 
  CategoryListPolaroidSkeleton, 
  SomeBlogsSkeleton, 
  InfosSkeleton,
  HeroSectionSkeleton,
  BlogsSectionSkeleton,
  CTASectionSkeleton
};
