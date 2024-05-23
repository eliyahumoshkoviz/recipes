import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'
import Label from '../Label'

const Photo = () => {
 
  return (
    <div className={styles.container}>
      <Image src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" fill/>
      <Label data={"ארוחות חינם"} color={"darkblue"} size={"30"}/>
    </div>
  )
}

export default Photo