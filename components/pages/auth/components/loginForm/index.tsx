"use client";
import LottieRender from "@/components/common/lottieRender";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import PixelSkull from "@/public/lotties/PixelSkull.json";
import { useAuth } from "@/providers/AuthProvider";

export default function LoginForm() {
  const { register, onSubmit, errors } = useAuth();  
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-164px)]">
      <div className="opacity-50 text-red-800 lg:block hidden">
        <LottieRender animationData={PixelSkull} />
      </div>
      <form onSubmit={onSubmit}>
        <Card className="flex flex-col justify-center lg:w-[70dvh] lg:h-[60dvh]  gap-5">
          <div className="flex flex-col gap-6 p-4">
            <div className="flex justify-center w-full text-lg">
              <h1 className="text-2xl font-bold">Login</h1>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-sm">Email</Label>
              <Input type="email" placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-sm">Password</Label>
              <Input type="password" placeholder="Password" {...register("password")} />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="flex justify-center w-full">
              <Button className="flex justify-center w-full">
                Login
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm">
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="text-sm">
              <Link href="/register">Don&apos;t have an account? Register</Link>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
}
