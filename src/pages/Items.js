import React from 'react';

export default function Items({ data }) {
    console.log(data);
    return (
        <div>
            <p>Items ww {data ? data.category : ''}</p>
        </div>
    )
}
