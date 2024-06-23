'use client';

import { useState } from "react";
import styles from './style.module.scss';
import Registr from "../Registr";
import Login from "../Login";

export default function Connect() {
  const [isConnect, setIsConnect] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={`${styles.registr} ${!isConnect ? styles.active : styles.inactive}`} onClick={() => setIsConnect(false)}>להרשמה</div>
        <div className={`${styles.login} ${isConnect ? styles.active : styles.inactive}`} onClick={() => setIsConnect(true)}>להתחברות</div>
      </div>
      {isConnect ? <Login /> : <Registr />}
    </div>
  );
}
