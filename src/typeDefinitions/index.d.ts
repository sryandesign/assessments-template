type Commodity = {
    hashValue?: string,
    symbol: string,
    name: string,
    currency: string,
    stockExchange: string,
    exchangeShortName: string
}

type CommodityProps = {
    commodity: Commodity
}

type CommodityListProps = {
    commodities: Array<Commodity>,
    dataLoading: boolean
}

type SearchBarProps = {
    setSearch: function,
    setExchange: function,
    exchangeTypes: Array<string>
}

type FilterProps = {
    setExchange: function,
    exchangeTypes: Array<string>
}

type SearchProps = {
    setSearch: function
}

type LoaderProps = {
    loading: boolean
}