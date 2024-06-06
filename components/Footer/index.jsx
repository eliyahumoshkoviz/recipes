"use client"
import { useState } from 'react';
import { Popup } from '../Popup';
import styles from './style.module.scss'
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
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
            <FaRegTrashAlt className={styles.edit}
             />
        </div>
        {popup && <Popup setPopup={setPopup} >
            <EditRecipe recipeName={recipeName} />
            </Popup>}
    .</>
    )
}
