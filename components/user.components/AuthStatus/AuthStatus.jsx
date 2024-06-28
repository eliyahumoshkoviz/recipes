"use client"
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';
import { getCookies } from 'cookies-next';


const AuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    
    const getAuthStatus = async () => {
        let { token, name, avatar } = getCookies();
         name = decodeURIComponent(name);
         avatar = decodeURIComponent(avatar);
        try {
            const response = token ? await fetch('/api/user', { method: "POST", body: JSON.stringify({ token }) }) : undefined
            const data = await response?.json();
            console.log(data);
            data && setIsLoggedIn({ userlogged: { name, avatar } });
        } catch (error) {
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
