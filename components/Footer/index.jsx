"use client";
import { useState } from "react";
import { Popup } from "../Popup";
import styles from "./style.module.scss";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { EditRecipe } from '../EditRecipe';
import { DeleteConfirm } from "../DeleteConfirm";

export const Footer = ({ recipeName }) => {
  const [popup, setPopup] = useState(undefined)
  const handleEditClick = () => {
    setPopup(<EditRecipe recipeName={recipeName} />)
  }
  return (<>
    <div className={styles.container}>
      <MdEdit className={styles.edit}
        onClick={() => setPopup(<EditRecipe recipeName={recipeName} />)}
      />
      <FaRegTrashAlt className={styles.edit}
        onClick={() => setPopup(<DeleteConfirm recipeName={recipeName} setPopup={setPopup} />)}

      />
    </div>
    {popup && <Popup setPopup={setPopup} >
      {popup}
    </Popup>}
    .</>
  )
}
