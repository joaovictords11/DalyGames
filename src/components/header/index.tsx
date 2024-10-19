import React from "react";
import logoImg from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { LiaGamepadSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/" className="hover:opacity-75">
            <Image
              src={logoImg}
              alt="Logo do site Daly Games"
              quality={100}
              priority
              className="w-full"
            />
          </Link>
          <Link href="/" className="hover:opacity-75">Games</Link>
          <Link href="/profile" className="hover:opacity-75">Perfil</Link>
        </nav>
        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile" className="hover:scale-110 duration-200 transition">
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
