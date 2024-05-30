import { useEffect, useState } from 'react'
import Styles from './style.module.scss'

export const Popup = ({ recipeName }) => {
    const [recipe, setRecipe] = useState({})


    useEffect(() => {
        fetch(`/api/recipe/${recipeName}`, { cache: 'no-store' }).then(res => {
            res.json().then(data => console.log(data))
        })

    }, [])

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
        <div className={Styles.Container} >
            <div className={Styles.popupContent}>
                {description}
            </div>
        </div>
    )
}