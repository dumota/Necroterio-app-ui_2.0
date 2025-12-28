"use client";

import { Alert } from "@/components/retroui/Alert";
import { ILoginSchema, loginSchema } from "@/schemas/login.schema";
import { login } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext, useState } from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";

interface AuthContextType {
  register: UseFormRegister<ILoginSchema>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<ILoginSchema>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [error, setError] = useState<string | null>(null);
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
    const response = await login(data.email, data.password);
    if (response?.status === 200) {
      console.log("response: ", response?.data);
    }
    if (response?.status === 400) {
      console.log("response: ", response?.message);
          return (  <Alert status="error" className="flex items-center">
            <Alert.Title>{response?.message}</Alert.Title>
          </Alert>);
    }
  });

  return (
    <AuthContext.Provider value={{ register, onSubmit, errors }}>
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
