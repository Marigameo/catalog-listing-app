import React, { Component } from 'react'
import Layout from './components/Layout'
import Listing from './components/Listing'
import ProductConsole from './components/ProductConsole'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isAdmin: false,
       products: null,
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json => {
              console.log('data', json)
              this.setState({products: json})
            })
  }
  
  renderBody = () => {
    return(
      this.state.isAdmin ? <ProductConsole/> : <Listing products={this.state.products}/>
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
