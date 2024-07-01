"use client"

import React, { useContext, useState } from 'react'
import styles from './style.module.scss'
import { FaUser } from 'react-icons/fa'
import { Popup } from '@/components/Popup'
import Connect from '../Connection'
import { MyContext } from '../DataContext'

export default function Guest() {
  const { setIsLoggedIn} = useContext(MyContext);

  const [popup, setPopup] = useState(undefined)

  return (
    <>
      <div className={styles.login}>
        <span className={styles.userAvatar}>
          <FaUser />
        </span>
        <p onClick={() => { setPopup(<Connect />) }}>הרשמה/התחברות</p>
      </div>
      {popup && <Popup setPopup={setPopup} >
        {popup}
      </Popup>}
    </>
  )
}
