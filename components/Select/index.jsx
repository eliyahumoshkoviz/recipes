"use client";
import styles from './style.module.scss'

export default function Select({ category }) {
  return (
    <div className={styles.container}>
      <select name="category">
        <option>בחר קטגוריה</option>
        {category?.map((categoryItem, index) => (
          <option key={index} value={categoryItem.title}>
            {categoryItem.title}
          </option>
        ))}
      </select>
      <select name="category">
        <option> סוג</option>
          <option>בשרי</option>
          <option>חלבי</option>
          <option>פרווה</option>
        
      </select>
    </div>
  );
}
