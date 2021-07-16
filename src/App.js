import React, { Component } from 'react'
import Layout from './components/Layout'
import Listing from './components/Listing'
import ProductConsole from './components/ProductConsole'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isAdmin: true,
       products: null,
       afterFilter: null,
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json => {
              console.log('json', json)
              this.setState({products: json, afterFilter: json})
            })
  }

  filterProducts = (searchQuery) => {
    const { products } = this.state
    let filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase())
    })
    this.setState({afterFilter: filteredProducts})
  }
  
  renderBody = () => {
    return(
      this.state.isAdmin ? <ProductConsole/> : <Listing products={this.state.afterFilter} filterProducts={this.filterProducts}/>
    )
  }

  render() {
    return (
      <div className="App">
         <Layout>
           {this.renderBody()}
         </Layout>
      </div>
    )
  }
}

export default App
