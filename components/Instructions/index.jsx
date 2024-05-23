import styles from './style.module.css'

export default function Instructions() {
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.title}> זמן הכנה</div>
                <div className={styles.title}> זמן בישול/אפיה</div>
                <div className={styles.title}>  מספר מנות</div>
                <div className={styles.type}>  מספר מנות</div>
            </div>
            <h1> רכיבים</h1>
        </div>
    )
}
