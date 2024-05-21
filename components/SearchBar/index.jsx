import React from 'react';
import styles from './style.module.scss';

export const SearchBar = () => {
    return (
        <form className={styles.container} action="">
            <input
                className={styles.formInput}
                type="text"
                placeholder="חפש מתכונים"
                name="search"
                required
                autoComplete="off"
            />
            <img
                src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search.png"
                alt="Search"
                className={styles.img}
            />
        </form>
    );
};
