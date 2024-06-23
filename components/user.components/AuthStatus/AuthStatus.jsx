"use client"
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';


const AuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        const getAuthStatus = async () => {
            //from cookies
            setIsLoggedIn(null);
        };
        getAuthStatus();
    }, []);


    return (
        <div className={styles.login}>
            {isLoggedIn ? <Logged /> : <Guest />}
        </div>

    );
}
export default AuthStatus;
