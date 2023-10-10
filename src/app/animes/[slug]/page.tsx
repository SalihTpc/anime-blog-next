import { getAnime, getAnimes } from "@/app/firebase.config";
import { Anime } from "@/lib/Interface";
import { modifyString } from "@/lib/generalFunc";
import React from "react";
import { notFound } from "next/navigation";
import AnimeInfo from "@/components/AnimeInfo";

export async function generateStaticParams() {
  const animes = await getAnimes();

  return animes.map((anime) => ({
    slug: anime.title,
  }));
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const anime = await getAnime(slug);
  if (!anime) notFound();
  return (
    <AnimeInfo
      id={anime.id}
      title={anime.title}
      summary={anime.summary}
      created_at={anime.created_at}
      categories={anime.categories}
      image={anime.image}
      author={anime.author}
    />
  );
};

export default page;
