"use client"
import styles from './style.module.scss';
import { useRouter } from 'next/router';

export const SearchBar = () => {

    // const router = useRouter()
   
    const handleSearch = e => {
       if (e.target.value) {
            console.log(e.target.value);
        //   router.push(`/airbnb/result?search=${e.target.value}`)
       } else {
        //    router.push('/')
       }
    }
    return (
        <form className={styles.container} action="">
            <input
                className={styles.formInput}
                type="text"
                placeholder="חפש מתכונים"
                name="search"
                required
                autoComplete="off"
                onChange={handleSearch}
            />
            <img
                src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search.png"
                alt="Search"
                className={styles.img}
            />
        </form>
    );
};
