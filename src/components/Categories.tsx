"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Category } from "@/lib/Interface";
import { Card } from "antd";
import Link from "next/link";
import { getCategories } from "../app/firebase.config";

async function getData() {
  const res = await getCategories();
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  const initialAciton = async () => {
    const data = await getData();
    setCategories(data);
  };
  useEffect(() => {
    initialAciton();
    return () => {
      setCategories([]);
    };
  }, []);
  return (
    <Card
      className="bg-neutral-300"
      title="Categories"
      headStyle={{ textAlign: "center" }}
    >
      {categories.map((dat) => (
        <Card.Grid
          onClick={() => router.push(`/categories/${dat.id}`)}
          className="w-2/12 text-center cursor-pointer"
          key={dat.id}
        >
          <Link href={`/categories/${dat.id}`}>{dat.title}</Link>
        </Card.Grid>
      ))}
    </Card>
  );
};

export default Categories;
