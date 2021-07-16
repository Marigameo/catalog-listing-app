import React from 'react'
import './search.css'

export default function Search({filterProducts}) {
    return (
        <div className="searchContainer">
            <input type="text" placeholder="Search using product names..." className="searchBar" 
                onKeyUp={(e) => filterProducts(e.target.value)}
            ></input>
        </div>
    )
}
