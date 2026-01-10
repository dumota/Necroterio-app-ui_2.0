import { NextRequest, NextResponse } from "next/server";

// Configuração para Route Handlers no App Router
export const runtime = 'nodejs';
export const maxDuration = 30; // 30 segundos timeout

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Nenhum arquivo foi enviado" },
        { status: 400 }
      );
    }

    // Validação do tipo de arquivo
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Apenas arquivos de imagem são permitidos" },
        { status: 400 }
      );
    }

    // Validação do tamanho (10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "Arquivo muito grande. Tamanho máximo: 10MB" },
        { status: 400 }
      );
    }

    // Upload para Cloudinary
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);
    uploadFormData.append("upload_preset", "zr4o05pn");
    uploadFormData.append("cloud_name", "dwsaxebpr");

    const cloudinaryResponse = await fetch(
      "https://api.cloudinary.com/v1_1/dwsaxebpr/upload",
      {
        method: "POST",
        body: uploadFormData,
      }
    );

    if (!cloudinaryResponse.ok) {
      const errorData = await cloudinaryResponse.json();
      return NextResponse.json(
        { error: "Erro ao fazer upload para Cloudinary", details: errorData },
        { status: cloudinaryResponse.status }
      );
    }

    const data = await cloudinaryResponse.json();

    return NextResponse.json({
      public_id: data.public_id,
      url: data.secure_url,
    });
  } catch (error) {
    console.error("Erro no upload:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
