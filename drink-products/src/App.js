import React, {Component} from 'react';
import data from './shared/data.json';

import './App.css';

import {Container,Navbar} from 'reactstrap';
import Products from './components/products';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: data
    }
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar>
          test
          </Navbar>
        </Container>
        <Container>
          <Products products={this.state.products}></Products>
        </Container>

      </div>
    );
  }
}


export default App;
