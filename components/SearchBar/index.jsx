"use client"
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';

export const SearchBar = () => {

    const router = useRouter()
   
    const handleSearch = e => {
       if (e.target.value) {
            console.log(e.target.value);
          router.push(`/category/extras?search=${e.target.value}`)
       } else {
           router.push('/')
       }
    }
    return (
        <div className={styles.container} action="">
            <input
                className={styles.formInput}
                type="text"
                placeholder="חפש מתכונים"
                name="search"
                autoComplete="off"
                onChange={handleSearch}
            />
            <img
                src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search.png"
                alt="Search"
                className={styles.img}
            />
        </div>
    );
};
