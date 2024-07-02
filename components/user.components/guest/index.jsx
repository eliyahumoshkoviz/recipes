"use client"

import React, { useState } from 'react'
import styles from './style.module.scss'
import { FaUser } from 'react-icons/fa'
import { Popup } from '@/components/Popup'
import Connect from '../Connection'
import { useUserStore } from '@/store/storeUser'

export default function Guest() {
  const [popup, setPopup] = useState(undefined)
  const setIsLoggedIn = useUserStore((state) => state.setUser);


  return (
    <>
      <div className={styles.login}>
        <span className={styles.userAvatar}>
          <FaUser />
        </span>
        <p onClick={() => { setPopup(<Connect setIsLoggedIn={setIsLoggedIn} />) }}>הרשמה/התחברות</p>
      </div>
      {popup && <Popup setPopup={setPopup} >
        {popup}
      </Popup>}
    </>
  )
}
