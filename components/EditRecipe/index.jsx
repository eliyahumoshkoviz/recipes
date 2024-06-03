import { useEffect, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import AddIngredients from "../AddIngredients";
import styles from "./style.module.scss";
import { updateRecipeAction } from "@/server/DB/actions/recipe.action";

export const EditRecipe = ({ recipeName }) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`/api/recipe/${recipeName}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const { ingredients, typeFood, instructions, category } = recipe;

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <form action={updateRecipeAction}>
        <div className={styles.inputes}>
          <Select typeFood={typeFood} cat={category?.[0].title} />
          <Input recipe={recipe} setRecipe={setRecipe} />
        </div>
        <div className={styles.add}>
          <AddIngredients ingredients={ingredients} setRecipe={setRecipe} />
        </div>
        <textarea
          value={instructions}
          onChange={handleTextChange}
          name="instructions"
          placeholder="הוראות הכנה"
          required
        />
        <button className={styles.btn} type="submit">
          סיום
        </button>
      </form>
    </div>
  );
};
