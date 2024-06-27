"use client"
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';
import { getCookies } from 'cookies-next';


const AuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    
    useEffect(() => {
        const getAuthStatus = async () => {
            //from cookies
            const token = getCookies('token')
            // const token = cookieStore.get()
            console.log(token)
            // setIsLoggedIn(null);
        };
        getAuthStatus();
    }, []);


    return (
        <div className={styles.login}>
            {isLoggedIn ? <Logged isLoggedIn={isLoggedIn}/> : <Guest setIsLoggedIn={setIsLoggedIn}/>}
        </div>

    );
}
export default AuthStatus;
