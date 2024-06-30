import React, { useState } from 'react';
import styles from './style.module.scss';
import { IoIosSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Setting = ({settings}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.settingContainer}>
     {isOpen ? <IoClose  className={styles.settingIcon} onClick={toggleDropdown} /> :
     <IoIosSettings  className={styles.settingIcon} onClick={toggleDropdown}/> 
     }
      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
          {settings.map((setting, index) => (
              <li key={index}>{setting}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Setting;
