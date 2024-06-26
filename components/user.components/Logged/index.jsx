"use client"

import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

export default function Logged({ isLoggedIn }) {
  console.log('ghjkl');
  console.log(isLoggedIn);
  const { name, avatar } = isLoggedIn?.userlogged
  return (

    <div className={styles.login} onClick={() => { }}>
      <span className={styles.userAvatar}>
        <Image src={avatar} fill sizes='100%' alt={"user avatar"} />
      </span>
      {`שלום ${name}`}
    </div>


  )
}
