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
    <div>
      <h1 className="text-center font-montserrat">{title}</h1>
      <div className="flex">
        <figure className="rounded-lg p-1 md:p-0 bg-slate-700">
          <img
            className="w-auto h-96 max-sm:h-40 float-left p-2 pr-4"
            src={image}
            alt={title}
          />
          <div className="text-justify">
            <blockquote>
              <p className="text-lg font-medium max-sm:p-0">{summary}</p>
            </blockquote>
            <figcaption className="font-medium float-right pb-4 pr-4">
              <div className="text-sky-500">
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
        </figure>
      </div>
      {/* <img src={image} alt={title} className="w-60 max-lg:w-48 max-md:w-32" />
      <div>{summary}</div> */}
    </div>
  );
};

export default AnimeCard;
