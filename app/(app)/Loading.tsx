
import { Loader } from "@/components/retroui/Loader";

export default function Loading() {

  return (
    <div className="flex items-center justify-center h-screen absolute top-0 left-0 w-full opacity-100 z-50">
      <Loader className="text-red-900"/>
    </div>
  );
}