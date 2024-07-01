"use client"
import React, { useContext } from 'react';
import styles from './style.module.scss';
import Logged from '../Logged';
import Guest from '../guest';
import CheckToken from '@/components/CheckToken';
import { DataContext, MyContext } from '../DataContext';

const AuthStatus = () => {
  const { isLoggedIn } = useContext(MyContext);

  return (
    <>
      <CheckToken />
      <div className={styles.login}>
        {isLoggedIn ? <Logged /> : <Guest />}
      </div>
    </>
  );
};

const AuthStatusContext = () => (
  <DataContext>
    <AuthStatus />
  </DataContext>
);

export default AuthStatusContext;
