"use client";

import { useRouter } from 'next/navigation';
import AddCategory from '../AddCategory';
import { Popup } from '../Popup';
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
export default function Select({ typeFood = "בשרי/חלבי", cat = 'בחר קטגוריה' }) {
  const router = useRouter()

  const [category, setCategory] = useState([])
  const [createCategory, setCreateCategory] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {

    fetch(`/api/category`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => { setCategory(data) })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === 'addCategory') {
      router.push('/createCategory')
    }
  };

  const handleAddCategory = () => {
    setCreateCategory(!createCategory);
  }

  return (
    <div className={styles.container}>
      <select onChange={handleChange} name="category" required={cat === 'בחר קטגוריה'}>
        <option value="" hidden disabled selected> {cat}</option>
        {category?.map((categoryItem, index) => (
          <option key={index} value={categoryItem.title}>
            {categoryItem.title}
          </option>
        ))}
        <optgroup style={{ background: "#a3040c" }}>
          <option value="addCategory">הוסף קטגוריה</option>
        </optgroup>
      </select>
      <select name="typeFood" required={typeFood === "בשרי/חלבי"}>
        <option value="" hidden disabled selected> {typeFood}</option>
        <option>בשרי</option>
        <option>חלבי</option>
        <option>פרווה</option>
      </select>
    </div>
  );
}
