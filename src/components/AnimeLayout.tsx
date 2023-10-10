"use client";

import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import { Anime } from "@/lib/Interface";

type MenuItem = Required<MenuProps>["items"][number];

const AnimeLayout = ({
  params,
  animes,
}: {
  params: { slug: string };
  animes: Anime[];
}) => {
  const [current] = useState(params.slug);

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const items: MenuItem[] = animes.map((anime, index) =>
    getItem(
      <Link href={`/animes/${anime.id}`}>
        <i className="fa-solid fa-angles-right text-orange-300 mr-[8px]"></i>
        {anime?.title}
      </Link>,
      anime.id
    )
  );
  return (
    <Menu
      theme="dark"
      selectedKeys={[current]}
      mode="inline"
      items={items}
      className="rounded-lg w-full"
    />
  );
};

export default AnimeLayout;
