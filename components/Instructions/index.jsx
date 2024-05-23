import styles from './style.module.scss'

export default function Instructions() {
    const ingredients = ["בשר", "מלח"];
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.title}>
                    <h4>
                        זמן הכנה
                    </h4>
                    <div className={styles.content}>
                        10 דקות
                    </div>
                </div>
                <div className={styles.title}>
                    <h4>
                        זמן בישול/אפיה
                    </h4>
                    <div className={styles.content}>
                        30 דקות
                    </div>
                </div>
                <div className={styles.title}>
                    <h4>
                        מספר מנות
                    </h4>
                    <div className={styles.content}>
                        25
                    </div>
                </div>
                <div className={styles.type}>
                    <h4>
                        סוג
                    </h4>
                    <div className={styles.content}>
                        בשרי
                    </div>
                </div>

            </div>
            <h1> רכיבים</h1>
            {
                <ul>
            {ingredients.map(item=><li>{item}</li>)}
                </ul>
            }
        </div>
    )
}
