"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { pathToFileURL } from "url";

type Props = {
  title: string;
  icon: string;
  path: string;
};

const HeaderItem = ({ title, icon, path }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={`${path}`}
      className={`no-underline relative shrink-0 flex items-center justify-center text-center font-jakarta gap-1 p-2 max-sm:w-10 max-sm:h-10 sm:py-2 sm:px-4 rounded-full bg-white hover:scale-[1.1] hover:font-semibold transition duration-200 ease-in-out ${
        pathname.startsWith(path)
          ? "bg-gradient-to-r from-white to-sky-400 text-white hover:font-semibold"
          : ""
      }`}
    >
      <i
        className={`text-xl text-sky-500 ${icon} ${
          pathname.startsWith(path) ? "text-sky-600" : ""
        }`}
      ></i>
      <span className="hidden sm:flex">{title}</span>
    </Link>
  );
};

export default HeaderItem;
