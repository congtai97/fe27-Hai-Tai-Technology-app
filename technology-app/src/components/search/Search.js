import React, { useState } from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  const [datasearch, setDataSearch] = useState("");
  // const [dataValue, setDataValue] = useState("");
  const handleSearch = () => {
    setDataSearch(onChange);
    // setDataValue(value);
  };
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon} />

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
