import { SearchBar } from "@/components/SearchBar";
import styles from "./style.module.scss";
import Photo from "@/components/Photo";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { readCategorysService } from "@/server/DB/category.service";

export default async function Home() {
  await connectToMongo();
  const category = await readCategorysService()

  return (
    <main className={styles.main}>
      <div className={styles.search}>
        <SearchBar />

      </div>
      <div className={styles.photoContainer}>

        {category.map((category, index) => <Photo data={category} key={index}/>)}
      </div>
    </main>


  );
}
