"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "TURKEY",
    description:
      "Sebuah permata transkontinental, menggabungkan sejarah yang kaya dengan budaya moden yang meriah. Merentasi Eropah dan Asia, ia menawarkan reruntuhan purba, bazar yang meriah seperti Grand Bazaar Istanbul, dan landskap yang menakjubkan dari pantai Mediterranean hingga ke kawasan Cappadocia yang unik.",
    background: "/percutian/turkey/1.jpg",
    images: [
      "/percutian/turkey/potrait.jpg",
      "/percutian/indonesia/potrait.jpg",
    ],
  },
  {
    id: 2,
    name: "INDONESIA",
    description:
      "Terbentang luas di khatulistiwa, Indonesia memukau dengan ribuan pulau, gunung berapi yang megah, dan keindahan alam yang mempesona. Dari pantai Bali yang ikonik hingga hutan hujan Kalimantan yang kaya, nikmati keragaman budaya, kuliner yang menggugah selera, dan keramahan penduduknya. Temukan petualangan yang tak terlupakan di destinasi impian anda.",
    background: "/percutian/indonesia/1.jpg",
    images: [
      "/percutian/indonesia/potrait.jpg",
      "/percutian/thailand/potrait.jpg",
    ],
  },
  {
    id: 3,
    name: "THAILAND",
    description:
      "Sebuah negara yang mempesonakan dengan kuil-kuil emas yang berkilauan, pantai-pantai tropika yang indah, dan pasar-pasar malam yang meriah. Nikmati kehangatan senyuman penduduk tempatan, rasai keunikan masakan Thai yang lazat, dan terokai warisan budaya yang kaya. Dari Bangkok yang sibuk hingga ke pulau-pulau selatan yang tenang, Thailand menjanjikan pengalaman percutian yang memikat hati.",
    background: "/percutian/thailand/1.jpg",
    images: ["/percutian/thailand/potrait.jpg", "/percutian/korea/potrait.jpg"],
  },
  {
    id: 4,
    name: "KOREA SELATAN",
    description:
      "Sebuah negara yang memukau dengan gabungan sempurna antara tradisi kuno dan inovasi moden. Terokai istana-istana bersejarah di Seoul, nikmati keindahan alam semula jadi di Pulau Jeju, dan rasai denyutan nadi budaya K-pop yang mendunia. Nikmati hidangan Korea yang lazat, alami pengalaman membeli-belah yang unik, dan kagumi teknologi canggih yang memacu negara ini.",
    background: "/percutian/korea/1.jpg",
    images: ["/percutian/korea/potrait.jpg", "/percutian/turkey/potrait.jpg"],
  },
];

export default function TravelSection() {
  const [selected, setSelected] = useState(destinations[0]);

  // Function to find destination by image path
  const findDestinationByImage = (imagePath: string) => {
    return destinations.find((dest) => dest.images[0] === imagePath);
  };

  return (
    <div
      className="relative pt-20S md:pt-0 w-full h-screen bg-cover bg-center transition-all duration-500 flex items-center"
      style={{ backgroundImage: `url(${selected.background})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative flex flex-col md:flex-row justify-around z-10 w-full px-4 md:px-6 gap-6 text-white">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-4 md:pl-14 text-center md:text-left">
          <motion.h1
            key={selected.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {selected.name}
          </motion.h1>
          <motion.p
            key={selected.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-left md:text-lg max-w-xl"
          >
            {selected.description}
          </motion.p>
          <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition">
            JELAJAH →
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-row gap-10 justify-center items-center">
          {selected.images.map((img, idx) => {
            const nextDestination = findDestinationByImage(img);

            return (
              <Image
                key={idx}
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                className="w-32 h-44 md:w-60 md:h-80 rounded-lg cursor-pointer hover:scale-105 transition"
                alt={selected.name}
                onClick={() => {
                  if (nextDestination) {
                    setSelected(nextDestination);
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-4 md:left-10 z-20 top-1/3 flex flex-col space-y-4">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              selected.id === dest.id ? "bg-yellow-400" : "bg-gray-500"
            }`}
            onClick={() => setSelected(dest)}
          ></div>
        ))}
      </div>
    </div>
  );
}
