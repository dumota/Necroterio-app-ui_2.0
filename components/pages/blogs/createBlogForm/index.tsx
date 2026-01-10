"use client";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import dynamic from "next/dynamic";



export default function CreateBlogForm() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-4 mt-2">
      <h1 className="text-2xl font-bold text-center">Crie seu novo blog</h1>

      <form className="flex flex-col gap-4">
        <div>
          <Label htmlFor="title">Título</Label>
          <Input id="title" name="title" />
        </div>
        <div>
          <Label htmlFor="content">Conteúdo</Label>
  
        </div>
      </form>
    </div>
  );
}