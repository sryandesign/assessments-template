import React from 'react';
import { Commodity, CommodityListHeader } from './';
import comStyles from './commodities.module.scss';

export default function CommodityList({ commodities } : CommodityListProps) {
    return (
        <div className={comStyles.commodityListWrapper}>
            <CommodityListHeader />
            <section>
                {commodities.map(commodity => {
                    const { hashValue, ...sanitized } = commodity;
                    return (
                        <Commodity key={sanitized.symbol} commodity={sanitized} />
                    )
                })}
            </section>
        </div>
    );
}