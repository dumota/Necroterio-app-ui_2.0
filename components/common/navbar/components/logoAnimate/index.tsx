"use client";

import Image from "next/image";
import Link from "next/link";

export default function LogoAnimate() {
  return (
    <div className="flex flex-row items-center lg:gap-2 gap-1">
      <Link href="/" className="h-[100px] w-[100px]">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="h-[100px] w-[100px]"
        />
      </Link>
      <div className="font-helpme text-2xl text-blood">
        Necroterio
      </div>
    </div>
  );
}
