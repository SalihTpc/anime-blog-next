import { Anime } from "@/lib/Interface";
import React from "react";

const AnimeCard = ({
  id,
  title,
  summary,
  categories,
  image,
  created_at,
  author,
}: Anime) => {
  const date = new Date(created_at * 1000);
  const formattedDateString = `${date.getDate()} ${date.toLocaleString(
    "default",
    { month: "short" }
  )} ${date.getFullYear()}`;
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-center font-montserrat">{title}</h1>
      <div className="flex flex-col w-full">
        <div className="rounded-lg bg-slate-700 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col flex-1 min-h-fit">
          <img
            className="w-auto h-96 max-sm:h-40 float-left p-2 pr-4 max-sm:float-none "
            src={image}
            alt={title}
          />
          <div className="text-justify max-sm:text-center flex-shrink">
            <div>
              <p className="text-lg font-medium max-sm:text-sm mx-3">
                {summary}
              </p>
            </div>
            <figcaption className="font-medium float-right pb-4 pr-4">
              <div className="text-sky-500" title="Author">
                {author ? (
                  <div>
                    <i className="fa-duotone fa-user-secret mr-3" />
                    <span>{author}</span>
                  </div>
                ) : (
                  <div>
                    <i className="fa-duotone fa-user-secret" />
                  </div>
                )}
              </div>
              <div className="text-slate-400 pt-2">
                <i className="fa-duotone fa-calendar-days mr-3" />
                {formattedDateString}
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
