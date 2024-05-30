"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import AddCategory from "../AddCategory";

export default function AddIngredien() {
  const [arrIngredients, setArrIngredients] = useState([]);

  const handleAddIngredients = () => {
    setArrIngredients((prev) => [...prev, 1]);
  };

  const handleDelIngredients = () => {
    setArrIngredients((prev) => {
      if (prev.length > 0) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };
  

  return (
    <div className={styles.container}>
      {/* <AddCategory /> */}
      <h2>רשימת רכיבים</h2>
      <div className={styles.buttes}>
        <input type="button" value="+" onClick={handleAddIngredients} />
        <input type="button" value="-" onClick={handleDelIngredients} />
      </div>
      <div className={styles.btn}>
      </div>
      <div className={styles.add}>
      <input
            type="text"
            placeholder="הוסף רכיב"
            name="ingredients"
            required
          />
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
