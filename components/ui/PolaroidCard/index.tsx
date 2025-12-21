"use client";

import { iPoloroidCardProps } from "./PolaroidCard.types";
import Image from "next/image";
import { PolaroidCardStyles as s } from "./PolaroidCard.styles";
import { motion } from "framer-motion";



export default function PolaroidCard({imageUrl, description, onClick, rotate}: iPoloroidCardProps) {
  return (

    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >

    <div className={s().container()} onClick={onClick} style={{ transform: `rotate(${rotate}deg)` }}>
      <div>
        <Image src={imageUrl} alt={description} width={200} height={150} className={s().image()}/>
      </div>
      <div className={s().description()}>
        <div>{description}</div>
      </div>
    </div>
    </motion.div>
  );
}