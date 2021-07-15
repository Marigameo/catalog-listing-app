import React, { Component } from 'react'
import './form.css'

export class ProductConsole extends Component {
    render() {
        return (
            <form className="form">
                <label htmlFor="cars">Choose your product category</label>

                <select name="cars" id="cars" className="inputs">
                    <option value="volvo">Men</option>
                    <option value="saab">Women</option>
                    <option value="mercedes">XC</option>
                    <option value="audi">PC</option>
                </select>
                <br/><br/>
                <input type="text" className="inputs" placeholder="Name of the product"></input>
                <br/><br/>
                <input type="number" className="inputs" placeholder="Enter price"></input>
                <br/><br/>
                <button className="btn">Upload to listing</button>
            </form>
        )
    }
}

export default ProductConsole
