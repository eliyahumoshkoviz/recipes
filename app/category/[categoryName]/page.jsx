import React from "react";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { createRecipesService } from "@/server/DB/recipe.service";

export default async function Category() {
  await connectToMongo();
 const x = {
  image: "chicken-stirfry.jpg",
  title: "עוף מוקפץ",
  ingredients: ["חזה עוף", "פלפלים", "ברוקולי", "רוטב סויה", "ג'ינג'ר", "שום", "שמן צמחי"],
  typeFood: "אסיאתי",
  instructions: "מטגנים עוף מוקפץ במחבת חמה עם ג'ינג'ר ושום. מוסיפים ירקות ורוטב סויה. מבשלים עד שהעוף מוכן והירקות רכים-פריכים.",
  description: "מנה מהירה ומלאת טעם בהשראת אסיה.",
  preparationTime: 10,
  CookingTime: 15,
  servings: 3,
  category: ["664f254a56a438a251e6cbcc"]
}

  // const craate = await createRecipesService(x);
  // console.log({craate});
  //   const result = await readHotelsService({
  //     $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]
  //  })

  return <div></div>;
}
