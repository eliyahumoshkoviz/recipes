import styles from "./style.module.scss";

export default function AddCategory() {
    return (
        <>
            <form className={styles.container}>
                <input type="text" name="title" placeholder="שם הקטגוריה" />
                <select name="colorLabel" required>
                    <option value="" hidden disabled selected>  צבע תוית</option>
                    <option value="red" style={{ background: "#feb608" }}>#feb608</option>
                    <option value="red" style={{ background: "#c5090a" }}>#c5090a</option>
                    <option value="red" style={{ background: "#8ab00b" }}>#8ab00b</option>
                    <option value="red" style={{ background: "#ab775d" }}>#ab775d</option>
                    <option value="red" style={{ background: "#585956" }}>#585956</option>
                </select>
                <input type="file" name="image" required="true" />
                <button style={{width: "90%"}} type="submit" >צור קטגוריה</button>
            </form>
        </>
    )
}
