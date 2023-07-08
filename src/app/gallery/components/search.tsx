
import { useState } from 'react';
import React from 'react';
import styles from './search.module.css';
interface Props {
    onSearch: (query: string) => void;
}

function Search({ onSearch }: Props) {
    const [query, setQuery] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className={styles.searchContainer}>
            <input type="text" 
            value={query} 
            onChange={handleSearch} 
            className={styles.searchInput}
            placeholder="Search for videos"/>
        </div>
    );
}
 
export default Search;
