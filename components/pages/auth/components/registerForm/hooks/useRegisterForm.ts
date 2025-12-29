
import { IRegisterSchema, registerSchema } from "@/schemas/register.schema";
import { registerUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useRegisterForm = () => {

   const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onRegister = handleSubmit( async (data) => {
    setIsLoading(true);
    const response = await registerUser(data);
    if (response?.status === 200) {
      setIsLoading(false);
      toast.success(response?.message, {
        richColors: true,
        position: "top-right",
        duration: 5000,
      });
    } else {
      setIsLoading(false);
      toast.error(response?.message);
    }
    setIsLoading(false);
  });

  return {
    register,
    onRegister,
    formState: { errors },
    isLoading,
  };
};
