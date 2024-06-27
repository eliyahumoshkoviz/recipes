'use client';

import { useState } from "react";
import styles from './style.module.scss';
import Registr from "../Registr";
import Login from "../Login";

export default function Connect({setIsLoggedIn}) {
  const [isConnect, setIsConnect] = useState(true);
  const [user, setUser] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={`${styles.login} ${isConnect ? styles.active : styles.inactive}`} onClick={() => setIsConnect(true)}>התחברות</div>
        <div className={`${styles.registr} ${!isConnect ? styles.active : styles.inactive}`} onClick={() => setIsConnect(false)}>הרשמה</div>
      </div>
      {isConnect ? <Login user={user} setIsLoggedIn={setIsLoggedIn}/> : <Registr setIsConnect={setIsConnect} setUser={setUser} />}
    </div>
  );
}
