"use client";
import { useState } from "react";
import styles from "./style.module.scss";

export default function AddIngredien() {
  const [arrIngredients, setArrIngredients] = useState([]);
  const handleAddIngredients = () => {
    setArrIngredients((prev) => [...prev, 1]);
  };
  return (
    <div className={styles.container}>
      <h2>רשימת רכיבים</h2>
      <div className={styles.btn}>
        <input type="button" value="+" onClick={handleAddIngredients} />
      </div>
      {arrIngredients?.map((item, index) => (
        <div className={styles.add}>
          <input
            key={index}
            type="text"
            placeholder="הוסף רכיב"
            name={`ingredients${index}`}
          />
        </div>
      ))}
    </div>
  );
}
