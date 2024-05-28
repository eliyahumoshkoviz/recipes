import React from "react";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { createCategorysService, readCategoryService } from "@/server/DB/category.service";
import styles from './style.module.scss'
import Navlink from "@/components/NavLink";
import Photo from "@/components/Photo";

const fakeCatData = [
    {
      "_id": "60b6c0f5f6d7a345d87fbb17",
      "title": "main_dishes",
      "image": "https://example.com/images/main_dishes_cuisine.jpg",
      "colorLabel": "#FF6347",
      "recipes": []
    },
    {
      "_id": "60b6c0f5f6d7a345d87fbb18",
      "title": "extras",
      "image": "https://example.com/images/extras_cuisine.jpg",
      "colorLabel": "#FFD700",
      "recipes": []
    },
    {
      "_id": "60b6c0f5f6d7a345d87fbb19",
      "title": "desserts",
      "image": "https://example.com/images/desserts_cuisine.jpg",
      "colorLabel": "#FF4500",
      "recipes": []
    },
    {
      "_id": "60b6c0f5f6d7a345d87fbb1a",
      "title": "cakes",
      "image": "https://example.com/images/cakes_cuisine.jpg",
      "colorLabel": "#FF1493",
      "recipes": []
    },
    {
      "_id": "60b6c0f5f6d7a345d87fbb1b",
      "title": "French",
      "image": "https://example.com/images/french_cuisine.jpg",
      "colorLabel": "#1E90FF",
      "recipes": []
    }
  ]
  // createCategorysService(fakeCatData.map(h =>({...h,image:'https://cdn.pixabay.com/photo/2024/05/09/11/39/ai-generated-8750738_640.jpg'}) ) )



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
