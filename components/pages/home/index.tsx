import { getApi } from "@/services/FetchData";
import { IBlogsHome } from "@/types/BlogsHome";
import { ICategoryResponse } from "@/types/Category";
import BlogsSection from "./components/blogsSection";
import CategoryListPolaroid from "./components/categoryListPolaroid";
import CTASection from "./components/ctaAction";
import HeroSection from "./components/heroSection";
import SomeBlogs from "./components/someBlogs";

export async function getServerSideProps() {
  const data = await getApi<ICategoryResponse>("category");
  const dataBloigsHome = await getApi<IBlogsHome[]>("blog");
  const blogsHome = await getApi<IBlogsHome[]>("blogsHome");
  return {
    props: {
      data: data.categories,
      blogs: dataBloigsHome,
      blogsHome: blogsHome,
    },
  };
}
 
export default async function Home() {
  const { props } = await getServerSideProps();
  const data = props.data;



  return (
    <div className="flex flex-col gap-14 lg:py-0 py-5">
      <HeroSection />
      <CategoryListPolaroid categories={data} />
      {/* <Infos /> */}
      <BlogsSection categories={data}/>
      <SomeBlogs blogs={props.blogsHome} />
      <CTASection />
      
    </div>
  );
}
