'use client'

import { useState } from "react";
import styles from './style.module.scss';
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { createUserAction } from "@/server/DB/actions/user.action";


export default function Registr() {
  const [isVisible, setIsVisible] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const detailsUser = Object.fromEntries(formData);
    try {
      const result =  await fetch(`/api/user/`, {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify( detailsUser ),
      });
      console.log({result})
      
      // if (res) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const formFields = [
    { name: "userName", placeholder: "* שם משתמש", type: "text", icon: <CiUser />, required: true },
    { name: "email", placeholder: "* מייל", type: "email", icon: <HiOutlineMail />, required: true },
    { name: "password", placeholder: "* סיסמא", type: isVisible ? "text" : "password", icon: <TbPassword />, required: true },
    { name: "avatar", placeholder: "* תמונת פרופיל", type: "file", icon: <FaUserCircle />, required: false }
  ];

  return (
    <form action={createUserAction} className={styles.container} >
      {formFields.map((field, index) => (
        <div className={styles.imputContainer}>
          <span className={styles.icon}>{field.icon}</span>
          <input
            key={index}
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
      <input className={styles.btn} type="submit" value="הרשמה" />
    </form>
  );
}


