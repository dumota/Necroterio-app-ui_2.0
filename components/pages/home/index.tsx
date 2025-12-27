import { getApi } from "@/services/FetchData";
import { ICategoryResponse } from "@/types/Category";
import CategoryListPolaroid from "./components/categoryListPolaroid";
import SomeBlogs from "./components/someBlogs";
import { IBlogsHome, IBlogsHomeResponse } from "@/types/BlogsHome";

export async function getServerSideProps() {
  const data = await getApi<ICategoryResponse>("category");
  const dataBloigsHome = await getApi<IBlogsHome[]>("blogsHome");
  console.log(dataBloigsHome);
 
  return {
    props: {
      data: data.categories,
      blogs: dataBloigsHome,
    },
  };
}

export default async function Home() {
  const { props } = await getServerSideProps();
  const data = props.data;
  const dataBloigsHome = props.blogs;



  return (
    <div className="flex flex-col gap-10 lg:py-0 py-5">
      <CategoryListPolaroid categories={data} />
      <SomeBlogs blogs={dataBloigsHome} />
    </div>
  );
}
