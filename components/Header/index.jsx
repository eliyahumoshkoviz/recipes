import Navlink from '../NavLink'
import styles from './style.module.scss'
import Image from 'next/image'

export default function Header() {
  const links = [
    {
      text: "מנות עיקריות",
      link: "/category/{main-dishes}"
    },
    {
      text: "תוספות",
      link: "/category/extras"
    },
    {
      text: "קינוחים",
      link: "/category/desserts"
    },
    {
      text: "עוגות",
      link: "/category/cakes"
    },
  ]
  return (
    <>
    <div className={styles.container}>
      <nav>
        {/* {links.map((item, index)=> <Navlink key={index} href={item.link}>{item.text}</Navlink>)} */}
       <h3 style={{color: "white"}} >הכנס מתכון</h3>
       </nav>
    </div>
    <div className={styles.fixed}>
    </div>
    </>
  )
}
