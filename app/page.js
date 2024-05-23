import { SearchBar } from "@/components/SearchBar";
import styles from "./style.module.scss";
import Photo from "@/components/Photo";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { readCategorysService } from "@/server/DB/category.service";
import Navlink from "@/components/NavLink";

export default async function Home() {
  await connectToMongo();
  const category = await readCategorysService()

  return (
    <main className={styles.main}>
      <div className={styles.search}>
        <SearchBar />

      </div>
      <div className={styles.photoContainer}>
<<<<<<< HEAD
        {category.map((category, index) => <Navlink key={index} href={`/category/${category.name}`}><Photo data={category} typeObj={"category"}/></Navlink>)}
=======
        {category.map((category, index) => <Navlink key={index} href={`/category/${category.title}`}><Photo data={category} /></Navlink>)}
>>>>>>> 4abe336cb32460e37f2c00549461fca906aa7243
      </div>
    </main>


  );
}
