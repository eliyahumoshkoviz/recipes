"use client";
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
export default function Select({ typeFood="בשרי/חלבי", cat = 'בחר קטגוריה' }) {
  const [add, setAdd] = useState(false)
  const [category, setCategory] = useState([])

  useEffect(() => {

    fetch(`/api/category`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => { setCategory(data) })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const addCategory = () => {
    setAdd(!add)
  }
  return (
    <div className={styles.container}>
      <select name="category" required>

        <option defaultValue={''}> {cat}</option>

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
        <option defaultValue={typeFood} > {typeFood }</option>
        <option>בשרי</option>
        <option>חלבי</option>
        <option>פרווה</option>
      </select>
    </div>
  );
}
