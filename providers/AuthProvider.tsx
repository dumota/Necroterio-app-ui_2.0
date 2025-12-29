"use client";

import { ILoginSchema, loginSchema } from "@/schemas/login.schema";
import { login } from "@/services/AuthService";
import { destroyAuthCookies, setAuthToken } from "@/services/TokenService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { toast } from "sonner";
import { useGlobalLoading } from "./GlobalLoading";


interface AuthContextType {
  register: UseFormRegister<ILoginSchema>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<ILoginSchema>;
  token: string | null;
  Logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

 
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const {show, hide} = useGlobalLoading();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    show();
    const response = await login(data.email, data.password);
    if (response?.status === 200) {
      setAuthToken(response?.data?.access_token || '');
      setToken(response?.data?.access_token || '');
      hide();
      toast.success(response?.message, {
        richColors: true,
        position: "top-right",
        duration: 5000,
       
      });
      router.push("/");
    }
    if (response?.status === 400) {
      hide();
      toast.error(response?.message, {
        richColors: true,
        position: "top-right",
        duration: 5000,
       
      });
    }
  });

  const Logout = () => {
    destroyAuthCookies();
    setToken(null);
    router.push("/");
  };



  return (
    <AuthContext.Provider value={{ register, onSubmit, errors, token, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
