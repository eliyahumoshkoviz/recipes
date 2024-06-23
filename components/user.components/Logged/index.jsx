import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

export default function Logged({ user = { name: 'מאיר', avatar: 'http://res.cloudinary.com/die7h5tgc/image/upload/v1719124786/recipeImage/jgecw5jbkn8ecel9nryu.jpg' } }) {
  return (
    
      <div className={styles.login} onClick={()=>{}}>
        <span className={styles.userAvatar}>
          <Image src={user.avatar} layout="fill" sizes='100%' alt={"user avatar"} />
        </span>
        {`שלום ${user.name}`}
      </div>
    

  )
}
