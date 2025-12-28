"use client";

import { ILoginSchema, loginSchema } from "@/schemas/login.schema";
import { login } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext } from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";

interface AuthContextType {
    register: UseFormRegister<ILoginSchema>;
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<ILoginSchema>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children}: { children: React.ReactNode }) {

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
        console.log(" processo de login: ", response);
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
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }