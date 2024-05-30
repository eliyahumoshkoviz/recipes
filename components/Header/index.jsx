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
        <Navlink href={'/'}>
          <h4 > דף הבית</h4>
        </Navlink>
        <Navlink href={'/createRecipe'}>
          <h4 >הכנס מתכון</h4>
        </Navlink>
      </nav>
    </div>
    <div className={styles.fixed}>
    </div>
  </>
  )
}
