"use client"

import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Setting from '../Setting';
const settings = ['Profile', 'Account', 'Logout','Profile', 'Account', 'Logout'];


export default function Logged({ isLoggedIn }) {
  const { name, avatar } = isLoggedIn?.userlogged
  return (

    <div className={styles.login} onClick={() => { }}>
      <span className={styles.userAvatar}>
        {avatar ?(
          <Image src={avatar} fill sizes='100%' alt={"user avatar"} />
        ):(
          <p>{name.slice(0, 1).toUpperCase()}</p>
        )}
      </span>
        <Setting settings={settings} />
    </div>


  )
}
