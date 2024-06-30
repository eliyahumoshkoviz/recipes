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
        if(!hasCookie('token'))  return
        let { token, name, avatar } = getCookies();
         name = decodeURIComponent(name);
         avatar = decodeURIComponent(avatar);
        try {
            const response = token ? await fetch('/api/user', { method: "POST", body: JSON.stringify({ token }) }) : undefined
            const {_id} = await response?.json();
            console.log(_id);
            _id && setIsLoggedIn({ userlogged: { name, avatar } });
        } catch (error) {
            deleteCookie('token')
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
