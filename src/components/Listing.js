import React from 'react'
import './listing.css'
import Search from './Search'

export default function Listing({products, filterProducts}) {
    if(!products) {
        return <div>Loading products...</div>
    } else {
        return (
        <>
            <div className="topbar">
                <h1>Ecommerce app</h1>
                <button style={{height: '35px', cursor: 'pointer'}}>Admin console</button>
            </div>
            <Search filterProducts={filterProducts}/>
            <div className="main">
                {
                    products?.length > 0 ? products.map(product => {
                    return(
                        <div className="card">
                            <div className="imageBox">
                                <img src={product.image} alt={product.title}/>
                            </div>
                            <div className="details">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <h4>{product.price}</h4>
                                <span className="chip">{product.category}</span>
                            </div>
                        </div>
                    )
                    }) : <h3 style={{textAlign: 'center'}}>No products found</h3>
                }
            </div>
        </>
        )
    }
}
