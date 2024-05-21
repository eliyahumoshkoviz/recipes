import styles from "./style.module.scss";
import Label from "@/componennts/Label";

export default function Home() {
  return (
    <main className={styles.main}>
    <Label data={'gdlkg'} color={'green'}/>
      <img src='background.jpg' className={styles.bg} />

    </main>


  );
}
