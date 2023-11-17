import AnimeCard from "@/components/AnimeCard";
import NewButton from "@/components/NewButton";
import { Anime } from "@/lib/Interface";
import { getAnimes } from "../firebase.config";

async function getData() {
  const res = getAnimes();
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const page = async () => {
  const data = await getData();

  return (
    <div className="">
      <NewButton path="animes" />
      <div className="flex items-center justify-center flex-wrap gap-4">
        {data.map((dat: Anime) => (
          <div key={dat.image} className="">
            <AnimeCard
              categories={dat.categories.join(" ")}
              title={dat.title}
              image={dat.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
