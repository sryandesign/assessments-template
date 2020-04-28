import { useState, useEffect } from 'react';

export default function useCommodities() {
  const [data, setData] = useState<Array<Commodity>>([]);
  const [commodities, setCommodities] = useState<Array<Commodity>>([]);
  const [search, setSearch] = useState("");
  const [exchange, setExchange] = useState("");
  const [exchangeTypes, setExchangeTypes] = useState<Array<string>>([]);
  useEffect(() => {
    fetch('https://financialmodelingprep.com/api/v3/symbol/available-commodities')
    .then(res => res.json())
    .then(json => {
      const exchangeOnlyVals:Array<string> = Array.from(new Set(json.map((x:Commodity) => x.stockExchange)));
      setExchangeTypes(["Any", ...exchangeOnlyVals])
      setData(json.map((d:Commodity) => { return {...d, hashValue: Object.values(d).join(' ') }}));
    })
  }, []);
  useEffect(() => {
    const filteredCommodities = data.filter(commodity => {
      if (exchange && exchange !== 'Any' && commodity.stockExchange !== exchange) {
        return false;
      }
      if (search && commodity.hashValue && commodity.hashValue.indexOf(search) === -1) {
        return false;
      }
      return true;
    });
    setCommodities([...filteredCommodities]);
  }, [search, exchange, data]);
  return {
    commodities,
    search, 
    setSearch,
    exchange,
    setExchange,
    exchangeTypes,
    setData
  }
};

