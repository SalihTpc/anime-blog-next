"use client";
import { modifyString } from "@/lib/generalFunc";
import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  categories: string;
  title: string;
  image: string;
};

const AnimeCard = ({ categories, title, image }: Props) => {
  const router = useRouter();
  return (
    <Card
      hoverable
      cover={<Image alt={title} src={image} width={165.6} height={331} />}
      onClick={() =>
        router.push(`/animes/${modifyString(title)}`, { scroll: false })
      }
    >
      <Card.Meta title={title} description={categories} />
    </Card>
  );
};

export default AnimeCard;
