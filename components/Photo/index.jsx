import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'
import Label from '../Label'

const Photo = ({ data }) => {

    const { image, name, colorLabel } = data
    return (
        <div className={styles.container}>
            <Image src={image} fill />
            <Label data={name} color={"dark blue"} size={"30"} />
        </div>
    )
}

export default Photo