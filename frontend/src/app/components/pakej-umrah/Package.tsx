"use client";

import { motion } from "framer-motion"; // ✅ Import Framer Motion
import Image from "next/image"; // ✅ Import Next.js Image for optimization

export default function Packages() {
  const packages = [
    {
      title: "Pakej Umrah Niat",
      price: "RM 6,990",
      img: "/mecca/package_1.jpg",
      description: [
        "15 Hari 14 Malam",
        "Malaysia Airlines",
        "KUL - JED - MEK - KUL",
      ],
    },
    {
      title: "Pakej Umrah Safaa",
      price: "RM 7,990",
      img: "/mecca/package_2.jpg",
      description: [
        "15 Hari 14 Malam",
        "Malaysia Airlines",
        "KUL - JED - MEK - KUL",
      ],
    },
    {
      title: "Pakej Umrah Marwa",
      price: "RM 8,990",
      img: "/mecca/package_3.jpg",
      description: [
        "15 Hari 14 Malam",
        "Malaysia Airlines",
        "KUL - JED - MEK - KUL",
      ],
    },
    {
      title: "Pakej Umrah Maqam",
      price: "RM 9,990",
      img: "/mecca/package_4.jpg",
      description: [
        "15 Hari 14 Malam",
        "Malaysia Airlines",
        "KUL - JED - MEK - KUL",
      ],
    },
  ];

  return (
    <div className="bg-black text-white p-6 md:p-12">
      <p className="text-center">UMRAH IMPIAN</p>
      <h1 className="text-center text-[#e3d08f] text-3xl md:text-5xl font-bold mb-8 uppercase">
        Terbang Bersama HIT Travel
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-[#e3d08f] 
                       max-w-xs md:max-w-none mx-auto md:mx-0"
          >
            <Image
              src={pkg.img}
              alt={pkg.title}
              width={500}
              height={300}
              className="rounded-lg w-full h-52 object-cover"
            />
            <h2 className="text-xl font-bold text-[#e3d08f] mt-4">
              {pkg.title}
            </h2>
            <p className="text-lg font-semibold text-gray-300">{pkg.price}</p>
            <ul className="text-sm text-gray-400 mt-2">
              {pkg.description.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
