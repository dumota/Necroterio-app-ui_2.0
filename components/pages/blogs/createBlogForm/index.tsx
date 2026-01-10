"use client";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Menu } from "@/components/retroui/Menu";
import { blogFormSchema, IBlogFormData } from "@/schemas/blog.schema";
import {
  createBlog,
  getBlogDetailById,
  updateBlog,
} from "@/services/BlogService";
import { getCategories } from "@/services/CategoryService";
import { ImageUpload } from "@/services/ImageUploadService";
import { IBlog } from "@/types/Blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, Upload, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import InputTerror from "@/components/terrorui/Input/Input";

const ReactQuill = dynamic(() => import("@/components/ui/Editor/ReactQuill"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[200px] border border-neutral-300 rounded-lg bg-white dark:bg-neutral-900 p-4">
      <div className="text-neutral-400 text-sm">Carregando editor...</div>
    </div>
  ),
});

interface BlogFormProps {
  blogId?: string;
  initialData?: Partial<IBlog>;
}

export default function BlogForm({ blogId, initialData }: BlogFormProps) {
  const router = useRouter();
  const isEditMode = !!blogId;
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(
    initialData?.thumbnail || null
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Buscar categorias
  const { data: categoriesData, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategories();
      return response.categories;
    },
  });

  const categories = categoriesData || [];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IBlogFormData>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      content: initialData?.content || "",
      imageUrl: initialData?.thumbnail || "",
      categoryId: initialData?.category?._id || "",
    },
  });

  const content = watch("content");
  const selectedCategoryId = watch("categoryId");

  // Encontrar categoria selecionada
  const selectedCategory = categories.find(
    (cat) => cat._id === selectedCategoryId
  );

  // Carregar dados do blog se estiver em modo de edição
  useEffect(() => {
    if (blogId && !initialData) {
      const loadBlog = async () => {
        try {
          const response = await getBlogDetailById(blogId);
          if (response.data) {
            setValue("title", response.data.title);
            setValue("description", response.data.description);
            setValue("content", response.data.content);
            setValue("imageUrl", response.data.thumbnail);
            setValue("categoryId", response.data.category._id || "");
            setImagePreview(response.data.thumbnail);
          }
        } catch (error) {
          toast.error("Erro ao carregar blog");
        }
      };
      loadBlog();
    }
  }, [blogId, initialData, setValue]);

  const handleFileSelect = useCallback((file: File | null) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione apenas imagens.");
      return;
    }

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      const preview = reader.result as string;
      setImagePreview(preview);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] || null;
    handleFileSelect(file);
  };

  const onSubmit = async (data: IBlogFormData) => {
    try {
      setIsLoading(true);

      // Upload da imagem ANTES de enviar ao backend
      let imageUrl = data.imageUrl || "";

      // Se há um arquivo novo selecionado, fazer upload
      if (imageFile) {
        toast.loading("Fazendo upload da imagem...");
        try {
          const uploadResult = await ImageUpload(imageFile);
          imageUrl = uploadResult.url;
          toast.dismiss();
        } catch (uploadError) {
          console.error("Erro no upload:", uploadError);
          toast.error("Erro ao fazer upload da imagem. Tente novamente.");
          setIsLoading(false);
          return;
        }
      }

      // Validar se tem imagem (obrigatória para criação)
      if (!isEditMode && !imageUrl) {
        toast.error("A imagem é obrigatória para criar um blog");
        setIsLoading(false);
        return;
      }

      // Se está editando e não há imagem (nem a antiga nem nova), não atualizar a URL
      if (isEditMode && !imageUrl && !imageFile) {
        // Manter a URL original que já estava no formulário
        imageUrl = data.imageUrl || "";
      }

      const blogData = {
        title: data.title.trim(),
        description: data.description.trim(),
        content: data.content,
        imageUrl,
        categoryId: data.categoryId,
      };

      // Agora enviar os dados com a URL da imagem já processada
      if (isEditMode && blogId) {
        const response = await updateBlog(blogId, blogData);
        if (response.data) {
          toast.success("Blog atualizado com sucesso!");
          router.push(`/blog/${blogId}/detail`);
        } else {
          toast.error(response.message || "Erro ao atualizar blog");
        }
      } else {
        const response = await createBlog(blogData);
        if (response.data) {
          toast.success("Blog criado com sucesso!");
          router.push(`/blog/${response.data.newBlog._id}/detail`);
        } else {
          toast.error(response.message || "Erro ao criar blog");
        }
      }
    } catch (error) {
      console.error("Erro ao salvar blog:", error);
      toast.error("Erro ao salvar blog. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-4 mt-2 p-2">
      <h1 className="text-2xl font-bold text-center">
        {isEditMode ? "Editar blog" : "Crie seu novo blog"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="title">Título</Label>
          {/* <Input
            id="title"
            {...register("title")}
            aria-invalid={!!errors.title}
          />
          {errors.title && (
            <p className="text-sm text-destructive mt-1">
              {errors.title.message}
            </p>
          )} */}

          <InputTerror {...register("title")} error={errors.title?.message} />
        </div>

        <div>
          <Label htmlFor="image">Capa do card</Label>

          {imagePreview ? (
            <div className="relative w-full rounded-lg border-2 border-neutral-300 dark:border-neutral-700 overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Preview da capa"
                className="w-full h-auto max-h-96 object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Remover imagem"
              >
                <X className="w-4 h-4" />
              </button>
              {imageFile && (
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                  {imageFile.name}
                </div>
              )}
            </div>
          ) : (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
                transition-colors
                ${
                  isDragging
                    ? "border-primary bg-primary/10 dark:bg-primary/20"
                    : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600"
                }
              `}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleFileChange(e);
                  // Atualizar o campo imageUrl quando uma nova imagem for selecionada
                  const file = e.target.files?.[0];
                  if (file) {
                    // Será atualizado após upload no onSubmit
                  }
                }}
                className="hidden"
              />
              <input type="hidden" {...register("imageUrl")} />
              <div className="flex flex-col items-center gap-3">
                <Upload
                  className={`w-12 h-12 ${
                    isDragging
                      ? "text-primary"
                      : "text-neutral-400 dark:text-neutral-600"
                  }`}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Clique para fazer upload ou arraste uma imagem
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    PNG, JPG, GIF até 10MB
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {errors.imageUrl && (
          <p className="text-sm text-destructive mt-1">
            {errors.imageUrl.message}
          </p>
        )}

        <div>
          <Label htmlFor="category">Categoria</Label>
          {isLoadingCategories ? (
            <div className="px-4 py-2 border-2 border-neutral-300 dark:border-neutral-700 rounded">
              <p className="text-sm text-neutral-500">
                Carregando categorias...
              </p>
            </div>
          ) : (
            <Menu>
              <Menu.Trigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-between"
                  aria-invalid={!!errors.categoryId}
                >
                  <span className={selectedCategory ? "" : "text-neutral-500"}>
                    {selectedCategory
                      ? selectedCategory.name
                      : "Selecione uma categoria"}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </Menu.Trigger>
              <Menu.Content className="min-w-[200px] w-full z-50 max-h-60 overflow-y-auto">
                {categories.length === 0 ? (
                  <Menu.Item disabled>Nenhuma categoria disponível</Menu.Item>
                ) : (
                  categories.map((category) => (
                    <Menu.Item
                      key={category._id}
                      onClick={() => {
                        setValue("categoryId", category._id, {
                          shouldValidate: true,
                        });
                      }}
                      className={
                        selectedCategoryId === category._id
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }
                    >
                      {category.name}
                    </Menu.Item>
                  ))
                )}
              </Menu.Content>
            </Menu>
          )}
          <input type="hidden" {...register("categoryId")} />
          {errors.categoryId && (
            <p className="text-sm text-destructive mt-1">
              {errors.categoryId.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Input
            id="description"
            {...register("description")}
            aria-invalid={!!errors.description}
          />
          {errors.description && (
            <p className="text-sm text-destructive mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="content">Conteúdo</Label>
          <ReactQuill
            setBody={(value) =>
              setValue("content", value, { shouldValidate: true })
            }
            body={content}
          />
          {errors.content && (
            <p className="text-sm text-destructive mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <div className="flex text-right justify-end gap-2">
          <Button
            variant="secondary"
            type="button"
            onClick={() => router.back()}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button variant="default" type="submit" disabled={isLoading}>
            {isLoading
              ? "Salvando..."
              : isEditMode
              ? "Atualizar blog"
              : "Criar blog"}
          </Button>
        </div>
      </form>
    </div>
  );
}
