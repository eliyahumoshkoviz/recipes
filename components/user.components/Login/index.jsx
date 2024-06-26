'use client'

import { useFormState } from 'react-dom'
import { useEffect, useState } from "react";
import styles from './style.module.scss';
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginAction } from "@/server/DB/actions/user.action";
import Checkmark from '@/components/Checkmark';
import Spinner from '@/components/Spinner';

export default function Login({ user, setIsLoggedIn }) {
  const [isVisible, setIsVisible] = useState(false);
  const [state, formAction] = useFormState(loginAction, undefined)
  const [isClick, setIsClick] = useState(false)


  const handleLoginSuccess = () => {
    setTimeout(() => {
      setIsLoggedIn(state.success)
    }, 2000);
  };

  { state?.success !== undefined && (handleLoginSuccess()) }
  useEffect(()=>{setIsClick(false)},[state])

  const formFields = [
    { name: "email", placeholder: "* מייל", type: "email", icon: <HiOutlineMail />, required: true, value: user?.email || '' },
    { name: "password", placeholder: "* סיסמא", type: isVisible ? "text" : "password", icon: <TbPassword />, required: true, value: user?.password || '' }
  ];

  return (
    <>
      <form className={styles.container} action={formAction}>
        {formFields.map((field, index) => (
          <div className={styles.imputContainer} key={index}>
            <span className={styles.icon}>{field.icon}</span>
            <input
              defaultValue={field.value}
              type={field.type}
              className={styles.input}
              placeholder={field.placeholder}
              name={field.name}
              required={field.required}
            />
            {field.name === "password" &&
              <span onClick={() => setIsVisible(old => !old)}>
                {isVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            }
          </div>
        ))}
        <input className={`${styles.btn} ${isClick ? styles.Click : ''}`}
         type="submit" value="התחברות" 
         onClick={()=>setIsClick(true)}/>
        <p className={styles.error}>{state?.error}</p>
      </form>
      { state?.success !== undefined && <Checkmark/> }
      {isClick && <Spinner/>}

    </>
  );
}


