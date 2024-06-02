"use client"
import { useState } from 'react';
import { Popup } from '../Popup';
import styles from './style.module.scss'
import { MdEdit } from "react-icons/md";
import { EditRecipe } from '../EditRecipe';

export const Footer = ({ recipeName }) => {
    const [popup, setPopup] = useState(false)
    const handleEditClick = () => {
        setPopup(true)
    }
    return (<>
        <div className={styles.container}>
            <MdEdit className={styles.edit}
                onClick={handleEditClick}
            />
        </div>
        {popup && <Popup setPopup={setPopup} >
            <EditRecipe recipeName={recipeName} />
            </Popup>}
    .</>
    )
}
