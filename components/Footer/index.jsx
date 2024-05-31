"use client"
import { useState } from 'react';
import { Popup } from '../Popup';
import styles from './style.module.scss'
import { MdEdit } from "react-icons/md";

export const Footer = ({ recipeName }) => {
    const [popup, setPopup] = useState(false)
    const handleEditClick = () => {
        console.log(recipeName);
        setPopup(true)
        console.log("popup:",popup);
    }
    return (<>
        <div className={styles.container}>
            <MdEdit className={styles.edit}
                onClick={handleEditClick}
            />
        </div>
        {popup && <Popup recipeName={recipeName} setPopup={setPopup} />}
    </>
    )
}
