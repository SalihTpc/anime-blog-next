import AnimeForm from "@/components/AnimeForm";
import CategoryForm from "@/components/CategoryForm";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-96">
        <AnimeForm />
      </div>
    </div>
  );
};

export default page;
