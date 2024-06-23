"use client"
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';

const checkAuthStatus = async () => {
        setTimeout(() => {
           return false
        }, 1000);
};

const AuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        const getAuthStatus = async () => {
            const status = await checkAuthStatus();
            setIsLoggedIn(status);
        };
        getAuthStatus();
    }, []);


    return (

        <div className={styles.login} onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? <Logged /> : <Guest />}

        </div>

    );
}
export default AuthStatus;
