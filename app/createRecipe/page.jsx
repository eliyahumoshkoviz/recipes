import { connectToMongo } from "@/server/DL/connectToMongo";
import Select from "@/components/Select";
import styles from "./style.module.scss";
import { createRecipeAction } from '@/server/DB/actions/recipe.action'
import { readCategorysService } from "@/server/DB/category.service";

export default async function CreateRecipe() {
  await connectToMongo();
  const category = await readCategorysService();
  return (
    <div className={styles.container}>
      <form action={createRecipeAction}>
        <Select category={category}/>
        <div className={styles.image}>
          <h3> הוסף תמונה</h3>
          <input type="file" name="image" placeholder=" הוסף תמונה" />
        </div>
        <input type="text" name="title" placeholder="שם המתכון" />
        <input type="text" name="description" placeholder="תיאור" />
        <input type="text" name="servings" placeholder="מספר מנות" />
        <input type="text" name="ingredients" placeholder="רכיבים " />
        <input type="text" name="instructions" placeholder=" הוראות הכנה" />
        <input type="text" name="preparationTime" placeholder=" זמן הכנה" />
        <input type="text" name="CookingTime" placeholder=" זמן אפיה/בישול" />
        <input type="text" name="typeFood" placeholder="סוג" />
        <button>הוסף</button>
      </form>
    </div>
  )
}
