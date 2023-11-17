import { getAnime, getAnimes } from "../../firebase.config";
import AnimeInfo from "@/components/AnimeInfo";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const animes = await getAnimes();

  return animes.map((anime) => ({
    slug: anime.id,
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
