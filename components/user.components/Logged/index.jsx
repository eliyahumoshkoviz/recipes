"use client"

import React, { useContext } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Setting from '../Setting';
import { settings } from '@/app/utils/objects';
import { MyContext } from '../DataContext';




export default function Logged() {
  const { isLoggedIn } = useContext(MyContext);

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
