import React from "react";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { createCategorysService, readCategoryService } from "@/server/DB/category.service";
import styles from './style.module.scss'
import Navlink from "@/components/NavLink";
import Photo from "@/components/Photo";

export default async function Category({ params: { categoryName } }) {
  await connectToMongo();
  const result = await readCategoryService({ title: decodeURI(categoryName) });
  console.log( "result:", result);
  return (
    <div className={styles.photoContainer}>
      {result?.recipes.map((category, index) => (
        <Navlink key={index} href={`/recipe/${category._id}`}>
          <Photo data={category} typeObj={"recipe"} />
        </Navlink>
      ))}
    </div>
  );
}
