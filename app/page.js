import { SearchBar } from "@/components/SearchBar";
import styles from "./style.module.scss";
import Label from "@/components/Label";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Label data={'מנות עיקריות'} color={'green'} size={'30'} />
      <div className={styles.search}>
        <SearchBar />

      </div>
      <div className={styles.photoContainer}>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    </main>


  );
}
