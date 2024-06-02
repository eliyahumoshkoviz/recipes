"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";

export default function Input({ values = {} }) {
  const [image, setImage] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    preparationTime: '',
    CookingTime: '',
    servings: '',
    ...values, // Initialize with default values or provided values
  });

  useEffect(() => {
    // Update the state if the `values` prop changes
    setInputValues((prev) => ({
      ...prev,
      ...values,
    }));
  }, [values]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { title, description, preparationTime, CookingTime, servings } = inputValues;

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
      <h3 onClick={() => setImage(!image)}>החלפת תמונה</h3>
      {image && <input type="file" name="image" placeholder="הוסף תמונה" />}
    </div>
  );
}
