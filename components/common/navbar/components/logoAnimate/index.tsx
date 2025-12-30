"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <motion.div
        whileHover="hover"
        initial="initial"
        className="cursor-pointer relative"
      >
        <motion.h1
          className="text-red-500 font-bold lg:text-2xl text-xl relative z-10"
          variants={{
            initial: {
              textShadow: "0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(239, 68, 68, 0.3)",
              color: "#ef4444",
            },
            hover: {
              textShadow: "0 0 10px rgba(239, 68, 68, 1), 0 0 20px rgba(239, 68, 68, 0.8), 0 0 30px rgba(236, 72, 153, 0.6), 0 0 40px rgba(14, 165, 233, 0.4), 0 0 50px rgba(168, 85, 247, 0.3)",
              scale: 1.05,
              color: "#ff00ff",
              filter: "brightness(1.2)",
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          Necroterio

        </motion.h1>
        <motion.div
          className="absolute inset-0 z-0"
          variants={{
            initial: { 
              opacity: 0,
              filter: "blur(0px)",
            },
            hover: {
              opacity: 0.6,
              filter: "blur(12px)",
              scale: 1.2,
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(90deg, #990099, #006666, #990099)",
          }}
        />
      </motion.div>
    </div>
  );
}
