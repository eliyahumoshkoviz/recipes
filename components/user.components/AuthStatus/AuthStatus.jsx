"use client"
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';
import { deleteCookie, getCookies, hasCookie } from 'cookies-next';


const AuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const getAuthStatus = async () => {
        if (!hasCookie('name')) return
        if (!hasCookie('avatar')) return
        let { name, avatar } = getCookies();
        name = decodeURIComponent(name);
        avatar = decodeURIComponent(avatar);
        try {
            const response = await fetch('/api/user', { method: "POST" })
            const { _id } = await response?.json();
            _id && setIsLoggedIn({ userlogged: { name, avatar } });
        } catch (error) {
            deleteCookie('name')
            deleteCookie('avatar')
            console.error("Fetch error:", error);
        }

    };
    useEffect(() => {
        getAuthStatus();
    }, []);

    return (
        <div className={styles.login}>
            {isLoggedIn ? <Logged isLoggedIn={isLoggedIn} /> : <Guest setIsLoggedIn={setIsLoggedIn} />}
        </div>

    );
}
export default AuthStatus;
