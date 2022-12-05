import React, { useState } from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
 
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
