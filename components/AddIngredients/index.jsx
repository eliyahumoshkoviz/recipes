"use client";
import { useState } from "react";
import styles from "./style.module.scss";

export default function AddIngredien() {
    const [arrIngredients, setArrIngredients] = useState([1]);

    const handleAddIngredients = () => {
        const updatedArr = [...arrIngredients];
        updatedArr.push(1);
        setArrIngredients(updatedArr);
    }
    return (
        <div className={styles.container}>
            <h2>רשימת רכיבים</h2>
            <div className={styles.b}>
                <input type="button" value="+" onClick={handleAddIngredients} />
            </div>
            {arrIngredients.map((item, index) => (<div className={styles.add}>
                <input key={index} name={`ingredients${index}`} type="text" placeholder="הוסף רכיב" />
            </div>))}

        </div>
    )
}
