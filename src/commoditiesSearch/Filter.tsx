import React from 'react';

export default function Filter({ setExchange, exchangeTypes } : FilterProps) {
    return (
        <>
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
        </>
    );
}