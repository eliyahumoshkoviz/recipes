import styles from "./style.module.scss";

export default function AddCategory() {
    return (
        <>
            <form className={styles.container}>
                <input type="text" name="title" placeholder="שם הקטגוריה" />
                <input type="color" name="colorLabel" placeholder="שם הקטגוריה" />
                <input type="file" name="image" required="true" />
                <button style={{ width: "90%" }} type="submit" >צור קטגוריה</button>
            </form>
        </>
    )
}
