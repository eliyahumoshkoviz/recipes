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
  });
console.log("fghj#######");
  // Ensure that inputValues are updated when the values prop changes
  useEffect(() => {
    if (values.title =='') {
      
      console.log("jgjfj");
      setInputValues({
        title: values.title || '',
        description: values.description || '',
        preparationTime: values.preparationTime || '',
        CookingTime: values.CookingTime || '',
        servings: values.servings || '',
      })
    
  }
  }, [inputValues]);

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
      <h3 onClick={() => setImage(!image)}>הוסף תמונה</h3>
      {image && <input type="file" name="image" placeholder="הוסף תמונה" />}
    </div>
  );
}
