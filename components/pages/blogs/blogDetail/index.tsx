"use client";
import { useParams } from "next/navigation";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Blog Detail {id}</h1>
    </div>
  );
}
