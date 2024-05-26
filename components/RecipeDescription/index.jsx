import styles from './style.module.css'
import Label from "@/components/Label";
import Image from 'next/image'

export default function RecipeDescription({ recipeName, description, image }) {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <Label data={'מנות עיקריות'} color={'red'} size={'40'} />
                <h1>{recipeName}</h1>
                <p>
                    {description}
                </p>
            </div>
            <Image className={styles.image}
                src={image}
                width={1000}
                height={1000}
                alt="Picture of the author"
            />


        </div>
    )
}
