import React from 'react'

function VanCard(props) {
    const { id, name, price, type, image } = props

    const bkgColor = (type) => {
        console.log(type)
        if (type === 'simple') return 'orangeBkg'
        if (type === 'rugged') return 'greenBkg'
        if (type === 'luxury') return 'blackBkg'
    }

    return (
        <div className='van-card'>
            <img alt='Van for rent' className='card-image' src={image} />
            <div className='card-info'>
                <h4 className='card-title'>{name}</h4>
            </div>
            <div className={`card-tag primary-tag selected ${bkgColor(type)}`}>{type}</div>
            <div className='card-price'><h4>${price}</h4><span className='small-font'>/day</span></div>
        </div>
    )
}

export default VanCard