import React, {Component} from 'react';
import data from './shared/data.json';

import './App.css';

import {Container} from 'reactstrap';
import Products from './components/products';
import Filter from './components/filter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: data,
      type: ""
    }
  }

  filterProducts = (e) => {
    const value = e.target.value;
    console.log('v',value);
    if(value === "" || value === "All"){
      this.setState({
        type: "",
        products:data
      })
    }
    else {
      console.log('d',data);
      this.setState({
        type: value,
        products: data.filter(
          (product) => product.type === value
        )
      })
    }
  }
  render() {
    return (
      <div className="App">
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
