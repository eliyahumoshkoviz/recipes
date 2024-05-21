import { SearchBar } from "@/components/SearchBar";
import styles from "./style.module.scss";
import Label from "@/components/Label";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Label data={'מנות עיקריות'} color={'green'} /> */}
      <div className={styles.search}>
        <SearchBar />
      </div>
    </main>


  );
}
