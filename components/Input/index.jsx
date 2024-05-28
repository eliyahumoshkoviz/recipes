"use client"
import { useState } from "react";
import styles from "./style.module.scss";

export default function Input() {
  const [image, setImage] = useState(false)

  const inputesc = [
    { type: "text", name: "title", placeholder: "שם המתכון" },
    { type: "text", name: "description", placeholder: "תיאור" },
    { type: "number", name: "servings", placeholder: "מספר מנות" },
    // { type: "text", name: "ingredients", placeholder: "רכיבים" },
    // { type: "text", name: "instructions", placeholder: " הוראות הכנה" },
    { type: "number", name: "preparationTime", placeholder: "זמן הכנה (בדקות)" },
    { type: "number", name: "CookingTime", placeholder: "זמן אפיה/בישול (בדקות)" },
    { type: "text", name: "typeFood", placeholder: "סוג" }];
  return (
    <div className={styles.container}>
      {inputesc.map((item, index) => <input key={index} type={item.type} placeholder={item.placeholder} name={item.name} />)}
      {<h3 onClick={() => setImage(!image)}>הוספת תמונה</h3>}
      {image && <input type="file" name="image" placeholder=" הוסף תמונה" />}

    </div>
  )
}
