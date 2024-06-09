import RecipeDescription from "@/components/RecipeDescription";
import Instructions from "@/components/Instructions";
import { readRecipeByIdService } from "@/server/DB/recipe.service";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { Footer } from "@/components/Footer";
import styles from './style.module.scss'

export default async function Recipe({ params: { recipeName } }) {
  await connectToMongo();
  const recipe = await readRecipeByIdService(decodeURI(recipeName));
  const {
    title,
    description,
    image,
    ingredients,
    preparationTime,
    CookingTime,
    servings,
    typeFood,
    instructions,
    category,
  } = recipe;

  return (
    <div className={styles.recipeBody}>
      <div>
        <RecipeDescription
          recipeName={title}
          description={description}
          image={image}
          category={category[0]}
        />
        <Instructions
          ingredients={ingredients}
          preparationTime={preparationTime}
          CookingTime={CookingTime}
          servings={servings}
          typeFood={typeFood}
          instructions={instructions}
        />
      </div>

      <Footer recipeName={recipeName} />
    </div>
  );
}
