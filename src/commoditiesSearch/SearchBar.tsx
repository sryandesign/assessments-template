import React from 'react';
import comStyles from './commodities.module.scss';

export default function SearchBar({ setSearch, setExchange, exchangeTypes } : SearchBarProps) {
    return (
        <div className={comStyles.searchBarWrapper}>
            Commodity Search
            <input 
                className={comStyles.searchInput}
                placeholder="Search"
                onChange={e => {
                    setSearch(e.target.value);
                }}
            />
            <label>Exchange</label>
            <select 
                onChange={e => {
                    setExchange(e.target.value);
                }}
            >
                {
                    exchangeTypes.map(ext => {
                        return (
                        <option value={ext} key={ext}>{ext}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}