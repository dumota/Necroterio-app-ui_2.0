import ListByCategory from "@/components/pages/blogs/listByCatgory";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ListByCategory id={id} />;
}
