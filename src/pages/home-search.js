import React from "react";
import SearchBar from "../theme/SearchBar";
import styles from '/src/css/homesearchbar.css';

const HomeSearch = () => (
    <div className={"new-search"}>
        <SearchBar style={styles}/>
    </div>
);

export default HomeSearch;
