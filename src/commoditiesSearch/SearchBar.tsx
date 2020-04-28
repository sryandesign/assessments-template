import React from 'react';

import { Filter, Search } from './';

import comStyles from './commodities.module.scss';

export default function SearchBar({ setSearch, setExchange, exchangeTypes } : SearchBarProps) {
    return (
        <div className={comStyles.searchBarWrapper}>
            Commodity Search
            <Search setSearch={setSearch} />
            <Filter setExchange={setExchange} exchangeTypes={exchangeTypes} />
        </div>
    );
}