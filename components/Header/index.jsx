import Navlink from '../NavLink'
import styles from './style.module.scss'

export default function Header() {
  return (
    <div className={styles.container}>
      <nav>
        <Navlink href={"/food"}>
          {"מנות עיקריות"}
        </Navlink>
        <Navlink href={"/meat"}>
          {"תוספות"}
        </Navlink>
        <Navlink href={"/meat"}>
          {"קינוחים"}
        </Navlink>
        <Navlink href={"/cakes"}>
          {"עוגות"}
        </Navlink>
      </nav>
    </div>
  )
}
