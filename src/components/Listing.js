import React from 'react'
import './listing.css'

export default function Listing({products}) {
    if(!products) {
        return <div>Loading products...</div>
    } else {
        return (
        <>
            <div className="topbar">
                <h1>Ecommerce app</h1>
                <button style={{height: '35px', cursor: 'pointer'}}>Admin console</button>
            </div>
            <div className="main">
                {products.map(product => {
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
                })}
            </div>
        </>
        )
    }
}
