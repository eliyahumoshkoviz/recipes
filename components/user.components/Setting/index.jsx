import React, { useState } from 'react';
import styles from './style.module.scss';
import { IoIosSettings } from "react-icons/io";


const Setting = ({settings}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.settingContainer}>
      <IoIosSettings onClick={toggleDropdown}
        className={styles.settingIcon} />
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
