import ListByCategory from "@/components/pages/blogs/listByCatgory";
import { getBlogsByCategoryId } from "@/services/BlogService";
import { IBlogByCategoryResponse } from "@/types/Blog";
import { Suspense } from "react";

async function getServerSideProps({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getBlogsByCategoryId(id);
  return {
    props: {
      data: data,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { props } = await getServerSideProps({ params });
  const data = props.data;
  console.log(data);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListByCategory data={data as IBlogByCategoryResponse} />
    </Suspense>
  );
}
