"use client";
import { useState } from "react";
import { Popup } from "../Popup";
import styles from "./style.module.scss";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { EditRecipe } from '../EditRecipe';
import { DeleteConfirm } from "../DeleteConfirm";

export const Footer = ({ recipeName, category, title }) => {
  const [popup, setPopup] = useState(undefined)

  return (<>
    <div className={styles.container}>
      <MdEdit className={styles.edit}
        onClick={() => setPopup(<EditRecipe recipeName={recipeName} setPopup={setPopup}/>)}
      />
      <FaRegTrashAlt className={styles.edit}
        onClick={() => setPopup(<DeleteConfirm recipeName={recipeName} setPopup={setPopup} category={category} title={title}/>)}

      />
    </div>
    {popup && <Popup setPopup={setPopup} >
      {popup}
    </Popup>}
    </>
  )
}
