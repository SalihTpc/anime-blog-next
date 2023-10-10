import Categories from "@/components/Categories";
import CategoryForm from "@/components/CategoryForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Categories />
      <div className="w-7/12 p-3 rounded-xl bg-slate-500">
        <CategoryForm />
      </div>
    </div>
  );
};

export default page;
