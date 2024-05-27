import Navlink from '../NavLink'
import styles from './style.module.scss'

export default function Header() {
  const links = [
    {text: "מנות עיקריות",
    link: "/category/main_dishes"
    },
    {text: "תוספות",
    link: "/category/extras"
    },
    {text: "קינוחים",
    link: "/category/desserts"
    },
    {text: "עוגות",
    link: "/category/cakes"
    },
    ]
  return (
    <>
    <div className={styles.container}>
      <nav>
        {links.map((item, index)=> <Navlink key={index} href={item.link}>{item.text}</Navlink>)}
       </nav>
    </div>
    <div className={styles.fixed}>
    </div>
    </>
  )
}
