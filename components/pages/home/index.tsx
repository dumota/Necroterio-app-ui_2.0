import PolaroidCard from "@/components/ui/PolaroidCard";
import { getApi } from "@/services/FetchData";
import { ICategoryResponse } from "@/types/Category";

export async function getServerSideProps() {
  const data = await getApi<ICategoryResponse>("category");
 

  return {
    props: {
      data: data.categories,
    },
  };
}

export default async function Home() {
  const { props } = await getServerSideProps();
  const data = props.data;

  console.log(data);


  return (
    <div className="flex flex-row justify-center gap-2 mt-10">
      {data.map((item) => {
        return (
          <div key={item._id}>
            <PolaroidCard imageUrl={item.thumbnail} description={item.name}  rotate={Number(item.rotateStyle || 0)} />
          </div>
        );
      })}
    </div>
  );
}
