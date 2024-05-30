"use client";
import styles from './style.module.scss'
import { useState } from 'react';
export default function Select({ category }) {
  const [add, setAdd] = useState(false)
  const addCategory = () => {
    setAdd(!add)
  }
  return (
    <div className={styles.container}>
      <select name="category" required>

        <option value="" hidden disabled selected> בחר קטגוריה</option>

        {category?.map((categoryItem, index) => (
          <option key={index} value={categoryItem.title}>
            {categoryItem.title}
          </option>
        ))}
        <optgroup style={{ background: "#a3040c" }}>
          <option onClick={addCategory}>הוסף קטגוריה</option>
        </optgroup>
      </select>
      <select name="typeFood" required>
        <option value="" hidden disabled selected> בשרי/חלבי</option>
        <option>בשרי</option>
        <option>חלבי</option>
        <option>פרווה</option>
      </select>
    </div>
  );
}
