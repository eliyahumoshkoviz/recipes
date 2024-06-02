"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function Input({ recipe }) {
  const [image, setImage] = useState(false);
  const [values, setValues] = useState({});
  useEffect(() => {
    if (recipe) {
      setValues(recipe);
    }
  }, [recipe]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { title, description, preparationTime, CookingTime, servings } = values;

  return (
    <div className={styles.container}>
      <input
        onChange={handleInputChange}
        value={title}
        type="text"
        placeholder="שם המתכון"
        name="title"
        required
      />
      <input
        onChange={handleInputChange}
        value={description}
        type="text"
        placeholder="תיאור"
        name="description"
      />
      <input
        onChange={handleInputChange}
        value={servings}
        type="number"
        min="1"
        placeholder="מספר מנות"
        name="servings"
      />
      <div className={styles.time}>
        <input
          onChange={handleInputChange}
          value={preparationTime}
          type="text"
          placeholder="זמן הכנה"
          name="preparationTime"
        />
        <input
          onChange={handleInputChange}
          value={CookingTime}
          type="text"
          placeholder="זמן בישול/אפיה"
          name="CookingTime"
        />
      </div>
      <h3 onClick={() => setImage(!image)}>הוסף תמונה</h3>
      {image && <input type="file" name="image" placeholder="הוסף תמונה" />}
    </div>
  );
}
