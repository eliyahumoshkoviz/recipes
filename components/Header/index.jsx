import Navlink from '../NavLink'
import styles from './style.module.scss'
import Image from 'next/image'
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <nav>
        <p className={styles.login}> 
          <span className={styles.userAvatar}>
            <FaUser/> </span>התחברות/הרשמה</p>
          <Navlink href={'/'}>
            <h4>דף הבית</h4>
          </Navlink>
          <div className={styles.dropdown}>
            <h4 className={styles.add}>הוסף מתכון/קטגוריה </h4>
            <div className={styles.menu}>
              <Navlink href={'/createRecipe'}>
                <h5>הוסף מתכון</h5>
              </Navlink>
              <Navlink href={'/createCategory'}>
                <h5>הוסף קטגוריה </h5>
              </Navlink>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.fixed}></div>
    </>
  );
}
