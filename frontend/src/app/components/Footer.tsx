import socialMedia from "../constants/SocialMedia";
import headermenu from "../constants/HeaderMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] py-6 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo & Address */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          <Link href="/">
            <Image
              src="/logo_nobg.png"
              width={150}
              height={150}
              alt="hit_travel"
            />
          </Link>

          <p className="font-bold">HIT TRAVEL SDN. BHD</p>
          <p>
            Suite D 20, Tingkat 2, Podium D, <br /> Plaza Pekeliling Jalan Tun
            Razak, <br /> Kuala Lumpur, Malaysia
          </p>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/3 flex justify-center">
          <ul className="flex gap-5">
            {socialMedia.map((sm) => (
              <li key={sm.key}>
                <Link href={sm.href}>
                  <sm.icon className="w-10 h-10 text-[#E3D08F] hover:scale-125 transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3">
          <ul className="grid grid-cols-2 gap-4 text-center md:text-left">
            {headermenu.map((hm) => (
              <li key={hm.key} className="hover:text-[#E3D08F]">
                <Link href={hm.link}>{hm.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-10 text-sm">
        <p>@2025 Hit Travel Sdn. Bhd. All rights reserved</p>
        <p>
          Crafted by{" "}
          <span className="underline text-purple-500">
            <Link href="https://www.ammarhairi.tech/">ammar hairi</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
