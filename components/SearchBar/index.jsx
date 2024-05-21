import React from 'react';
import styles from './style.module.scss';

export const SearchBar = () => {
    return (
        <form className={styles.container} action="">
            <img
                src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search.png"
                alt="Search"
                className={styles.img}
            />
            <input
                className={styles.formInput}
                type="text"
                placeholder="חפש מתכונים"
                name="search"
                required
                autoComplete="off"
            />
        </form>
    );
};
