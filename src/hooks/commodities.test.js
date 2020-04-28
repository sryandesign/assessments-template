import React from 'react';
import ReactDOM from 'react-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCommodities } from 'hooks';

import App from '../App';

const mockCommodity = {
    currency: "USX",
    exchangeShortName: "COMMODITY",
    name: "Lean Hogs May 20",
    stockExchange: "CME",
    symbol: "LHUSX",
}

test('Commodity Top Level Filtering Works', () => {
    const { result } = renderHook(() => useCommodities());
    expect(result.current.commodities.length).toBe(0);
    act(() => {
        result.current.setData(new Array(50).fill().map(x => { return{ ...mockCommodity, hashValue: Object.values(mockCommodity).join(' ')}}));
    })
    expect(result.current.commodities.length).toBe(50);
    act(() => {
        result.current.setSearch('SearchStringThatWillNotMatch');
    })
    expect(result.current.commodities.length).toBe(0);
    act(() => {
        result.current.setSearch('USX');
    })
    expect(result.current.commodities.length).toBe(50);
    act(() => {
        result.current.setExchange('FailingExchange');
    })
    expect(result.current.commodities.length).toBe(0);
})