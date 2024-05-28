import { SearchBar } from "@/components/SearchBar";
import styles from "./style.module.scss";
import Photo from "@/components/Photo";
import CreateRecipe from "@/components/CreateRecipe";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { readCategorysService } from "@/server/DB/category.service";
import Navlink from "@/components/NavLink";

export default async function Home() {
  await connectToMongo();
  const category = await readCategorysService()

  return (
    <main className={styles.main}>
      <div className={styles.search}>
        {/* <SearchBar /> */}
        <CreateRecipe />
      </div>
      <div className={styles.photoContainer}>
<<<<<<< HEAD
        {category.map((category, index) => <Navlink key={index} href={`/category/${category.title}`}><Photo data={category} typeObj={"category"} /></Navlink>)}
=======
        {category?.map((category, index) => <Navlink key={index} href={`/category/${category.title}`}><Photo data={category} typeObj={"category"}/></Navlink>)}
>>>>>>> 60240132754531df97197b3fd9d50d98ec0ae438
      </div>
    </main>


  );
}
