import { Input } from "@/components/retroui/Input";
import { InputHTMLAttributes } from "react";
import { inputStyles } from "./Input.styles";
import { cn } from "@/lib/utils";


interface TerrorInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

const InputTerror = (props: TerrorInputProps) => {
  return (
    <>
      <Input {...props} className={cn(inputStyles().input(), props.className)} />
      {props.error && <p className="text-red-500">{props.error}</p>}
    </>
  );
};

InputTerror.displayName = "InputTerror";

export default InputTerror;
