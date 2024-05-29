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
      <div className={styles.add}>
        <div className={styles.a}>
          <input
            type="text"
            placeholder="הוסף רכיב"
            name={`ingredients`}
          />
        </div>
        <div className={styles.b}>
          <input type="button" value="+" onClick={handleAddIngredients} />
        </div>
      </div>
      {arrIngredients?.map((x, index) => (
        <input
          key={index}
          type="text"
          placeholder="הוסף רכיב"
          name={`ingredients${index}`}
        />
      ))}
    </div>
  );
}
