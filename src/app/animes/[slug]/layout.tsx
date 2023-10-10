import { getAnimes } from "@/app/firebase.config";
import AnimeLayout from "@/components/AnimeLayout";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const animes = await getAnimes();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-6 max-h-56">
      <div className="h-full flex-none lg:w-[15%] flex items-center flex-col pt-4 px-4 pb-8 bg-[#001529] rounded-lg max-sm:p-0">
        <h1 className="text-xl font-jakarta text-center text-slate-400">
          Animes
        </h1>
        <AnimeLayout params={params} animes={animes} />
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}
