'use client'

import { useState } from "react";
import styles from './style.module.scss';
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const detailsUser = Object.fromEntries(formData);
    try {
      // const res = await axiosReq({
      //   method: "POST",
      //   url: `/users/register`,
      //   body: { ...detailsUser, fullName: fullName },
      // });
      console.log(detailsUser)
      // if (res) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const formFields = [
    { name: "email", placeholder: "* מייל", type: "email", icon: <HiOutlineMail />, required: true },
    { name: "password", placeholder: "* סיסמא", type: isVisible ? "text" : "password", icon: <TbPassword />, required: true }
  ];

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
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
            <div onClick={() => setIsVisible(old => !old)}>
              {isVisible ? <FiEyeOff /> : <FiEye />}
            </div>
          }
        </div>
      ))}
      <input className={styles.btn} type="submit" value="התחברות" />
    </form>
  );
}


