import React, { useContext } from 'react'
import styles from './style.module.scss'
import { useRouter } from 'next/router';

export const DeleteConfirm = ({ setPopup, recipeName, category }) => {
  const router = useRouter

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/recipe/${recipeName}`, {
        method: 'DELETE',
        cache: 'no-store',
        body: JSON.stringify({ category }),
      });
      console.log(response)
      if (response.ok) {
        setPopup(undefined)
        router.push('/')

      }
  
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>אתה בטוח רוצה <br /> למחוק את המתכון הזה?</h1>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.confirmButton}`} onClick={handleDelete}>אישור</button>
        <button className={`${styles.button} ${styles.cancelButton}`} onClick={() => setPopup(undefined)}>ביטול</button>
      </div>

    </div>
  )
}
