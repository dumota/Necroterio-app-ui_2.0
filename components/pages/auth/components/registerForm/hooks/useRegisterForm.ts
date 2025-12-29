
import { useGlobalLoading } from "@/providers/GlobalLoading";
import { IRegisterSchema, registerSchema } from "@/schemas/register.schema";
import { registerUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useRegisterForm = () => {
  const { show, hide } = useGlobalLoading();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onRegister = handleSubmit( async (data) => {
    show();
    const response = await registerUser(data);
    if (response?.status === 200) {
      hide();
      toast.success(response?.message, {
        richColors: true,
        position: "top-right",
        duration: 5000,
      });
    } else {
      hide();
      toast.error(response?.message);
    }
    hide();
  });

  return {
    register,
    onRegister,
    formState: { errors },
  };
};
