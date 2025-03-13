import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./searchbar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <BiSearchAlt className={styles.searchIcon} />
        <input type="text" placeholder="Xəbər axtar..." className={styles.input} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.searchButton}>Axtar</button>
        <button className={styles.filterButton}>Filter</button>
      </div>
    </div>
  );
};

export default SearchBar;
