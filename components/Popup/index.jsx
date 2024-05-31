import { useEffect, useState } from 'react'
import Styles from './style.module.scss'

export const Popup = ({recipeName,setPopup}) => {
    const[recipe,setRecipe]= useState({})


    useEffect(() => {
        fetch(`/api/recipe/${recipeName}`, { cache: 'no-store' })
            .then(res => res.json())
            .then(data => { setRecipe(data)})
            .catch(error => console.error('Fetch error:', error));
    }, [recipeName]);

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
        <div className={Styles.Container} onClick={()=>setPopup(false)} >
            <div className={Styles.popupContent}>
                {title}
            </div>
        </div>
    )
}