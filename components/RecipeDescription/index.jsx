import styles from './style.module.css'
import Label from "@/components/Label";
import { readCategoryService } from '@/server/DB/category.service';
import { connectToMongo } from '@/server/DL/connectToMongo';
import Image from 'next/image'

export default async function RecipeDescription({ recipeName, description, image,category }) {
    await connectToMongo();
    const result = await readCategoryService(category[0]);
    return (
        
        <div className={styles.container}>
            <div className={styles.description}>
                <Label data={result.title} color={result.colorLabel} size={'40'} />
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
