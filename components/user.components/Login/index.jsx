'use client'

import { useFormState } from 'react-dom'
import { useState } from "react";
import styles from './style.module.scss';
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginAction } from "@/server/DB/actions/user.action";
import Checkmark from '@/components/Checkmark';

export default function Login({ user, setIsLoggedIn }) {
  const [isVisible, setIsVisible] = useState(false);
  const [state, formAction] = useFormState(loginAction, undefined)

  const handleLoginSuccess = () => {
    setTimeout(() => {
      setIsLoggedIn(state.success)
    }, 2000);
  };

  { state?.success !== undefined && (handleLoginSuccess()) }

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
        <input className={styles.btn} type="submit" value="התחברות" />
      </form>
      { state?.success !== undefined && <Checkmark/> }
    </>
  );
}


