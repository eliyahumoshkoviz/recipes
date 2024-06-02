import { useEffect, useState } from 'react'
import Input from '../Input'
import Select from '../Select'
import AddIngredients from '../AddIngredients'
import styles from './style.module.scss'

export const EditRecipe = ({ recipeName }) => {

    const [recipe, setRecipe] = useState({})


    useEffect(() => {
        fetch(`/api/recipe/${recipeName}`, { cache: 'no-store' })
            .then(res => res.json())
            .then(data => { setRecipe(data) })
            .catch(error => console.error('Fetch error:', error));
    }, []);

    const {
        title,
        description,
        image,
        ingredients,
        preparationTime,
        CookingTime,
        servings,
        typeFood,
        instructions,
        category
    } = recipe;



    return (
        <div className={styles.container}>
            <form >
                <div className={styles.inputes}>
                    <Select category={category} />
                    <Input />
                </div>
                <div className={styles.add}>
                    <AddIngredients />
                </div>
                <textarea name="instructions" placeholder="הוראות הכנה" required />
                    <button className={styles.btn} type="submit">
                        סיום    
                    </button>
            </form>
        </div>
    )
}
