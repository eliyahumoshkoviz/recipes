import { connectToMongo } from "@/server/DL/connectToMongo";
import Select from "@/components/Select";
import styles from "./style.module.scss";
import { createRecipeAction } from '@/server/DB/actions/recipe.action'
import { readCategorysService } from "@/server/DB/category.service";
// action={createRecipeAction}

export default async function CreateRecipe() {
  await connectToMongo();
  const category = await readCategorysService();
console.log("fdfdfdfdfd", category);
  return (
    <div className={styles.container}>
      <form action={createRecipeAction}>
        <Select category={category}/>
        <div className={styles.image}>
          <h3> הוסף תמונה</h3>
          <input type="file" placeholder=" הוסף תמונה" />
        </div>
        <input type="text" placeholder="שם המתכון" />
        <input type="text" placeholder="רכיבים " />
        <input type="text" placeholder=" הוראות הכנה" />
        <input type="text" placeholder=" זמן הכנה" />
        <input type="text" placeholder=" זמן אפיה/בישול" />
        <input type="text" placeholder="סוג" />
        <button>הוסף</button>
      </form>
    </div>
  )
}
