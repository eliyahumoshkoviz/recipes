
import styles from './style.module.scss'
// import { useRouter } from "next/navigation"


export default async function Select({ category }) {
//   const router = useRouter()
// console.log(category);
   
  const handleSearch = e => {
    //  if (e.target.value) {
    //   console.log(e.target.value);
        
    //  } else {
    //     router.push('/airbnb')
    //  }
  }
  return (
    <div>
      {/* <label className={styles.label} htmlFor="selectOption">בחר קטגוריה</label> */}
      <select name='category' className={styles.select} id="selectOption">
        <option>בחר קטגוריה</option>
        {category?.map((categoryItem, index) => (
            <option className={styles.option} key={index} value={categoryItem.title}>
              {categoryItem.title}
            </option>
        ))}
      </select>
    </div>
  );
}