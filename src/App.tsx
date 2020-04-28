import React from 'react';
import { CommodityList, SearchBar } from './commoditiesSearch';
import baseStyles from './base.module.scss';
import { useCommodities } from 'hooks';

// Just leaving this abstraction since likely this app will include multiple routes.
function App() {
  const {
    commodities,
    setSearch,
    setExchange,
    exchangeTypes
  } = useCommodities();
  return (
    <section className={baseStyles.root}>
      <SearchBar 
        setSearch={setSearch}
        setExchange={setExchange}
        exchangeTypes={exchangeTypes}
      />
      <CommodityList commodities={commodities}/>
    </section>
  );
}

export default App;
