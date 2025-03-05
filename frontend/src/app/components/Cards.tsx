"use client";

import { motion } from "framer-motion";
import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  onHover: () => void;
  onLeave: () => void;
}

export default function Card({
  image,
  title,
  description,
  link,
  onHover,
  onLeave,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative block overflow-hidden rounded-2xl border border-[#E3D08F] bg-transparent transition-all h-full md:h-1/2 md:w-1/4"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#E3D08F]">{title}</h3>
        <p className="text-sm mt-2">{description}</p>

        {/* Visit Button */}
        <motion.a
          href={link}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex items-center gap-2 text-lg font-medium text-gray-400 opacity-80 transition-all"
        >
          Lanjut
          <RiArrowRightLine className="w-5 h-5 transition-all group-hover:text-[#E3D08F]" />
        </motion.a>
      </div>
    </motion.div>
  );
}
