import { connectToMongo } from "@/server/DL/connectToMongo";
import Select from "@/components/Select";
import styles from "./style.module.scss";
import { createRecipeAction } from '@/server/DB/actions/recipe.action'
import { readCategorysService } from "@/server/DB/category.service";
import Input from "@/components/Input";

export default async function CreateRecipe() {
  await connectToMongo();
  const category = await readCategorysService();
  return (
    <div className={styles.container}>
      <form action={createRecipeAction}>
        <div className={styles.inputes}>
        <Select category={category}/>
        <Input />
        </div>
        <div className={styles.add}>
        <input type="text" name="ingredients" placeholder="הוסף רכיב"/ >
        <div className={styles.addBtn}>
          <input type="button" value="+"/>
        </div>
        </div>
        <textarea name="instructions" placeholder="הוראות הכנה"/>
        <button className={styles.btn}>הוסף</button>
      </form>
    </div>
  )
}
