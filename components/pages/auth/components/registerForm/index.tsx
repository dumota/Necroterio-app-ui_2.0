"use client";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRegisterForm } from "./hooks/useRegisterForm";

export default function RegisterForm() {

  const { register, onRegister, formState : { errors } } = useRegisterForm();

   
  
 
    return (




    <div className="flex justify-center items-center w-full h-[calc(100vh-160px)]  bg-red-700">
      {/* <div className="opacity-50 text-red-800 lg:block hidden">
        <LottieRender animationData={PixelSkull} />
      </div> */}
      <form onSubmit={onRegister}>
        <Card className="flex flex-col justify-center gap-5 lg:w-xl p-5 ">
          <div className="flex flex-col gap-6 p-4">
            <div className="flex justify-center w-full text-lg">
              <h1 className="text-2xl font-bold">Register</h1>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-sm">Name</Label>
              <Input type="text" placeholder="Name" {...register("name")} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-sm">Email</Label>
              <Input type="email" placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-sm">Password</Label>
              <Input type="password" placeholder="Password" {...register("password")} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-sm">Confirm Password</Label>
              <Input type="password" placeholder="Confirm Password" {...register("cf_password")} />
              {errors.cf_password && <p className="text-red-500 text-sm">{errors.cf_password.message}</p>}
            </div>

            <div className="flex justify-center w-full">
              <Button className="flex justify-center w-full">
                Register
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-red-800 font-bold">Login</Link>
            </div>
          </div>
        </Card>
      </form>
   
    </div>
  );
}
