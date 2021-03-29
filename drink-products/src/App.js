import React, {Component} from 'react';
import data from './shared/data.json';

import './App.css';

import {Container} from 'reactstrap';
import Products from './components/products';
import Filter from './components/filter';
import Search from './components/search'

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: data,
      type: "",
      productName : ""
    }
  }

  filterProducts = (e) => {
    console.log(e.target);
    const value = e.target.value;
    if(value === "" || value === "All"){
      this.setState({
        type: "",
        products:data
      })
    }
    else {
      this.setState({
        type: value,
        products: data.filter(
          (product) => product.type === value
        )
      })
    }
  }
  searchProducts = (e) => {
    const text = e.target.value;
    console.log('search',text);
    if (text === "" || text.length < 3){
      this.setState({
        products:data
      })
    }
    else {
      console.log('text ready to go');
      this.setState({
        products: data.filter(
          (product) => (product.productName.toLowerCase().includes(text.toLowerCase()) || product.type.toLowerCase().includes(text.toLowerCase()))
        )
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Search productName = {this.state.productName}
          searchProducts = {this.searchProducts}></Search>
        </Container>
        <Container>
          <Filter count={this.state.products.length}
           type={this.state.type}
           filterProducts={this.filterProducts}></Filter>
        </Container>
        <Container>
          <Products products={this.state.products}></Products>
        </Container>

      </div>
    );
  }
}


export default App;
