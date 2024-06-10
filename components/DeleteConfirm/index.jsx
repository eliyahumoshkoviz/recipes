import React, { useContext } from 'react'
import styles from './style.module.scss'

export const DeleteConfirm = ({setPopup , recipeName})=> {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>אתה בטוח רוצה <br/> למחוק את המתכון הזה?</h1>
    <div  className={styles.buttons}>
    <button className={`${styles.button} ${styles.confirmButton}`}>אישור</button>
  
 
  <button className={`${styles.button} ${styles.cancelButton}`} onClick={()=>setPopup(undefined)}>ביטול</button>
    </div>
    
    </div>
  )
}
