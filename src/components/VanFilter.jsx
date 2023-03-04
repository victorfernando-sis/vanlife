import React from 'react'

function VanFilter() {
    const items = ['Simple', 'Luxury', 'Rugged']

    return (
        <div className='van-filter'>
            {items.map(element => (
                <button className="van-filter-item" key={element}>{element}</button>
            ))}
            <button className='van-clear-filter'>Clear filters</button>
        </div>
    )
}

export default VanFilter