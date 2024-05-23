import styles from './style.module.css'
import Label from "@/components/Label";
import Image from 'next/image'

export default function RecipeDescription({ recipeName }) {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
            <Label data={'מנות עיקריות'} color={'red'} size={'40'} />
                <h1>{recipeName}</h1>
                <p>
                קבבונים עסיסיים וטעימים עם ירקות צלויים שמכינים בנינג'ה גריל ב-10 דקות וללא מאמץ. ארוחת על האש בלי העשן מסביב:)

                </p>
            </div>
                <Image className={styles.image}
                    src="/images/meat.jpg"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                />


        </div>
    )
}
