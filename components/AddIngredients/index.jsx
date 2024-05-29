"use client"
import styles from "./style.module.scss";

export default function AddIngredien() {
    const arrIngredients = [1, 3];
    const handleAddIngredients = () => {
        arrIngredients.push(1);
        console.log(arrIngredients[0]);
    }
    return (
        <div className={styles.container}>
            <div className={styles.add}>
                <div className={styles.a}>
                    <input  type="text" placeholder="הוסף רכיב" />
                </div>
                <div className={styles.b}>
                    <input  type="button" value="+" onClick={handleAddIngredients} />
                </div>
              
            </div>
                    <input  type="text" placeholder="הוסף רכיב" />
                    <input  type="text" placeholder="הוסף רכיב" />
                    <input  type="text" placeholder="הוסף רכיב" />
        </div>
    )
}

