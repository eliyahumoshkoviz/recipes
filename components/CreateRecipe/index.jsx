import styles from "./style.module.scss";

export default function CreateRecipe() {
  return (
    <div className={styles.container}>
      <form>
        <select> 

          <option value=""> בחר קטגוריה</option>
          <option value="">מנות עיקריות</option>
          <option value=""> תוספות</option>
          <option value="">קינוחים </option>
          <option value=""> עוגות</option>
        </select>
        <input type="text" placeholder="שם המתכון"/>
        <input type="text" placeholder="רכיבים "/>
        <input type="text" placeholder=" הוראות הכנה"/>
        <input type="text" placeholder=" זמן הכנה"/>
        <input type="text" placeholder=" זמן אפיה/בישול"/>
      </form>
    </div>
  )
}
