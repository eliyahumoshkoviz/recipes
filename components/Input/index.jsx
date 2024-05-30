"use client"
import { useState } from "react";
import styles from "./style.module.scss";

export default function Input() {
  const [image, setImage] = useState(false)

  return (
    <div className={styles.container}>
      <input type="text" placeholder="שם המתכון" name="title" required/>
      <input type="text" placeholder="תיאור" name="description" />
      <input type="number" min="1" placeholder="מספר מנות" name="servings"/>
      <div className={styles.time}>
      <input type="text" placeholder="זמן הכנה " name="preparationTime"/>
      <input type="text" placeholder=" זמן בישול/אפיה" name="CookingTime" />
      </div>
      {<h3 onClick={() => setImage(!image)}>הוספת תמונה</h3>}
      {image && <input type="file" name="image" placeholder=" הוסף תמונה" />}

    </div>
  )
}
