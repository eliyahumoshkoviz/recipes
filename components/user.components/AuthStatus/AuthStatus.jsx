"use client"
import React, { useState } from 'react';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';
import CheckToken from '@/components/CheckToken';


const AuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    return (
        <>
        <CheckToken setIsLoggedIn={setIsLoggedIn}/>
        <div className={styles.login}>
            {isLoggedIn ? <Logged isLoggedIn={isLoggedIn} /> : <Guest setIsLoggedIn={setIsLoggedIn} />}
        </div>
        </>

    );
}
export default AuthStatus;
