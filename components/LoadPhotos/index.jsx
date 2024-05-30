import React from 'react'
import styles from './styles.module.scss'

const LoadPhoto = () => {
  return (
    <section className={styles.load} >
    {Array(3).fill('k').map((j, i) => <div className={styles.photoLoad} key={i} ></div>)}
 </section>
  )
}

export default LoadPhoto