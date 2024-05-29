"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import { useState } from "react";

export default function AddIngredien() {
    const [arrIngredients, setArrIngredients] = useState([1]);
    const [ingredient, setIngredient] = useState([]);

    const handleAddIngredients = () => {
        const updatedArr = [...arrIngredients];
        updatedArr.push(1);
        setArrIngredients(updatedArr);
    }
    const handleIngredients = (e) => {
        const updatedIngredients = [...ingredient];
        updatedIngredients.push(e.target.value);
        setIngredient(updatedIngredients);
        console.log(ingredient);
    }
    console.log(ingredient);
    return (
        <div className={styles.container}>
            <h2>רשימת רכיבים</h2>
                <div className={styles.b}>
                    <input  type="button" value="+" onClick={handleAddIngredients} />
                </div>
                {arrIngredients.map((item,index)=> (<div className={styles.add}>
                    <input onBlur={e=>handleIngredients(e)}  type="text" placeholder="הוסף רכיב" />
            </div>))}
            {/* name="ingredients" */}
            <input type="text" readOnly style={{display: "none"}} name='ingredients' defaultValue={ingredient} />
  };
 
