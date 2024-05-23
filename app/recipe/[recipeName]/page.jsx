import RecipeDescription from '@/components/RecipeDescription'
import Instructions from '@/components/Instructions'
import { readRecipeByIdService } from "@/server/DB/recipe.service";
import { connectToMongo } from "@/server/DL/connectToMongo";

export default async function Recipe() {
  await connectToMongo();
  const id = "664f2c4756a438a251e6cbdf";
  const recipe = await readRecipeByIdService(id);
  console.log("dgdgdgd " + recipe.image);
  const ingredients = recipe.ingredients;

  return (
    <div>

      <RecipeDescription
        recipeName={recipe.title}
        description={recipe.description}
        image={recipe.image}
      />
      <Instructions
        ingredients={ingredients}
        preparationTime={recipe.preparationTime}
        CookingTime={recipe.CookingTime}
        servings={recipe.servings}
        typeFood={recipe.typeFood}
        instructions={recipe.instructions}
      />
    </div>
  )
}
