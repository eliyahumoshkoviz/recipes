import React from "react";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { createCategorysService } from "@/server/DB/category.service";

export default async function Category() {
  await connectToMongo();
  const x = {
    name: "main-dishes",
    image: "https://img.lovepik.com/bg/20231213/an-angry-cat-looking-in-the-dark_2452200_wh1200.png",
  };

  // const craate = await createCategorysService(x);
  // console.log({craate});
  //   const result = await readHotelsService({
  //     $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]
  //  })

  return <div></div>;
}
