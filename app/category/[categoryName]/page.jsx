import React from "react";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { readCategoryService } from "@/server/DB/category.service";

export default async function Category({ params: { categoryName } }) {
  await connectToMongo();
  const result = await readCategoryService({ title: decodeURI(categoryName) });

  console.log(result);

  return <div></div>;
}
