import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'
import Label from '../Label'

const Photo = ({ data,typeObj}) => {
    console.log(data);
    const { image, title, colorLabel} = data
    console.log({title});
    return (
        <div className={styles.container}>
            <Image src={image} fill />
            {typeObj=="category"&&<Label data={title} color={colorLabel} size={"30"} />}
            {typeObj=="recipe"&&<div className={styles.recipeName}>{title}</div>}
        </div>
    )
}

export default Photo