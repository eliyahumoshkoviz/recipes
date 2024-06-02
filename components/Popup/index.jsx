import { useEffect, useState } from 'react'
import Styles from './style.module.scss'

export const Popup = ({setPopup , children}) => {
   
    return (
        <div className={Styles.Container} onClick={()=>setPopup(false)} >
            <div className={Styles.popupContent}>
               {children}
            </div>
        </div>
    )
}