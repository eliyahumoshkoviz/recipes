import Select from "@/components/select";
import { readCategorysService } from "@/server/DB/category.service";
import { connectToMongo } from "@/server/DL/connectToMongo";

export default async function CreateREcipe({ params: { recipeName } }) {
    await connectToMongo();
    const category = await readCategorysService()

  return (
    <Select category={category}/>
  );
}
