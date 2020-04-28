import React from 'react';

// Local Modules
import comStyles from './commodities.module.scss';

export default function Commodity({ commodity } : CommodityProps) {
    return (
        <div className={comStyles.commodityWrapper}>
            <div>{commodity.symbol}</div>
            <div>{commodity.name}</div>
            <div>{commodity.exchangeShortName}</div>
            <div>{commodity.stockExchange}</div>
            <div>{commodity.currency}</div>
        </div>
    );
}