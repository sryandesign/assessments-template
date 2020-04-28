import React from 'react';
import { Loader } from 'components';
import { Commodity, CommodityListHeader } from './';
import comStyles from './commodities.module.scss';

export default function CommodityList({ commodities, dataLoading } : CommodityListProps) {
    return (
        <div className={comStyles.commodityListWrapper}>
            <CommodityListHeader />
            <section>
                <Loader loading={dataLoading} />
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