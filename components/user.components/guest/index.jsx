import React from 'react'
import styles from './style.module.scss'
import { FaUser } from 'react-icons/fa'

export default function Guest() {
  return (
  <div className={styles.login}>
    <span className={styles.userAvatar}>
      <FaUser />
    </span>
    <p>הרשמה/התחברות</p>
  </div>
  )
}
