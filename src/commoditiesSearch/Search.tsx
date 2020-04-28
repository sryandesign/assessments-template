import React from 'react';
import comStyles from './commodities.module.scss';

export default function Search({ setSearch } : SearchProps) {
    return (
        <input 
            className={comStyles.searchInput}
            placeholder="Search"
            onChange={e => {
                setSearch(e.target.value);
            }}
        />
    );
}