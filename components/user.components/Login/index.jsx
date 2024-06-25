'use client'

import { useState } from "react";
import styles from './style.module.scss';
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login({ user }) {
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
    { name: "email", placeholder: "* מייל", type: "email", icon: <HiOutlineMail />, required: true, value: user?.email || '' },
    { name: "password", placeholder: "* סיסמא", type: isVisible ? "text" : "password", icon: <TbPassword />, required: true, value: user?.password || '' }
  ];

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
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
  );
}


