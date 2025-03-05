"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./components/Cards";

export default function Home() {
  const [bgImage, setBgImage] = useState("/default-background.jpg");

  return (
    <div className="relative px-10 md:px-0 w-full md:h-screen overflow-hidden">
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={bgImage}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </AnimatePresence>

      {/* Cards */}
      <div className="flex flex-col pt-30 gap-10 md:pt-0 md:gap-0 md:flex-row justify-evenly items-center md:h-screen">
        <Card
          image="/mecca/package_4.jpg"
          title="Pakej Umrah"
          description="Ia bukan sahaja sebuah perjalanan, ianya satu panggilan"
          link="/pakej-umrah"
          onHover={() => setBgImage("/mecca/bg.jpg")}
          onLeave={() => setBgImage("")}
        />
        <Card
          image="/percutian/turkey/1.jpg"
          title="Destinasi Percutian"
          description="Jelajah dan rasa keunikan di seluruh pelusuk dunia"
          link="/destination"
          onHover={() => setBgImage("/percutian/turkey/1.jpg")} // Change background
          onLeave={() => setBgImage("")}
        />
      </div>
    </div>
  );
}
