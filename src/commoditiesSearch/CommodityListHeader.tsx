import React from 'react';

// Local Modules
import comStyles from './commodities.module.scss';

const headers = ['Symbol', 'Name', 'Exchange Short Name', 'Stock Exchange', 'Currency']

export default function Commodity() {
    return (
        <header className={comStyles.commodityHeaderWrapper}>
            {
                headers.map(header => <div key={header}>{header}</div>)
            }
        </header>
    );
}