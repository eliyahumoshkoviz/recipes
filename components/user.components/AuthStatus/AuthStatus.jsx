"use client"
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss'
import Logged from '../Logged';
import Guest from '../guest';
import CheckToken from '@/components/CheckToken';
import { useUserStore } from '@/store/storeUser';


const AuthStatus = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(null);
    const isLoggedIn = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);
    // useEffect(()=>{setUser({x:4})},[])
    
    // console.log(x);


    return (
        <>
        {/* <CheckToken setIsLoggedIn={setIsLoggedIn}/> */}
        <CheckToken />
        <div className={styles.login}>
            {/* {isLoggedIn ? <Logged isLoggedIn={isLoggedIn} /> : <Guest setIsLoggedIn={setIsLoggedIn} />} */}
            {isLoggedIn ? <Logged /> : <Guest />}
        </div>
        </>

    );
}
export default AuthStatus;
