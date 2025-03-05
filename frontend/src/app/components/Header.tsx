"use client";
import headermenu from "../constants/HeaderMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu2Fill, RiCloseFill } from "@remixicon/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent py-6">
      <div className="flex justify-between items-center px-6 md:px-14">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo_nobg.png"
            width={100}
            height={100}
            alt="hit_travel"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center gap-10">
          {headermenu.map((menu) => (
            <li
              key={menu.key}
              className="text-center hover:text-[#E3D08F] hover:scale-125 transition-all"
            >
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseFill /> : <RiMenu2Fill />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4">
          {headermenu.map((menu) => (
            <li
              key={menu.key}
              className="text-center hover:text-[#E3D08F] transition-all"
            >
              <Link href={menu.link} onClick={() => setIsOpen(false)}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
