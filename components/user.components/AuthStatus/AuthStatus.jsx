"use client"
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';
import { getCookies } from 'cookies-next';
import { checkToken } from '@/server/DB/utils/jwt';


const AuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const getAuthStatus = async () => {
        const {token,name,avatar} = getCookies();
        // const x = checkToken(token)
        // console.log(x);
        const decodedName = decodeURIComponent(name);
        setIsLoggedIn({userlogged:{name: decodedName,avatar}});

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
