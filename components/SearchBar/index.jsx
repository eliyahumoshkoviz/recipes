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

// <form className={styles.form} role="search" action="" >
// <div className={styles.formControl}>
//   <input
//     className={styles.formInput}
//     type="text"
//     placeholder="חפשו מתכונים, טיפים ומדריכים"
//     name="s"
//     required
//     autoComplete="off"
//   />
//   <button className={styles.btn} type="submit">
//     <img
//       width="177"
//       height="177"
//       src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search.png"
//       alt="Search"
//       className={styles.entered}
//     />
//     <noscript>
//       <img
//         width="177"
//         height="177"
//         src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search.png"
//         alt="Search"
//       />
//     </noscript>
//     <img
//       width="177"
//       height="177"
//       className={styles.hover}
//       src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search_hov.png"
//       alt="Search Hover"
//     />
//     <noscript>
//       <img
//         width="177"
//         height="177"
//         className={styles.hover}
//         src="https://www.10dakot.co.il/wp-content/themes/10dakot/assets/img/search_hov.png"
//         alt="Search Hover"
//       />
//     </noscript>
//   </button>
// </div>
// </form>