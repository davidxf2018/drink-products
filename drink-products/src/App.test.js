/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Filter from './components/filter';
import App from './App';
// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });


describe('Filter Product Method', () => {
  it('should update type state and get products with corresponding value', () => {
    const wrapper = shallow(<App/>);
    const value = "Wine";
    const e = {target:{value:value}};
    wrapper.instance().filterProducts(e);
    console.log('products',wrapper.state());
    expect(wrapper.state('type')).toBe(value);
  });
});

describe('Search Product Method', () => {
  it('should update products state and get products with corresponding value', () => {
    const wrapper = shallow(<App/>);
    const value_1 = "beerrrr";
    const e = {target:{value:value_1}};
    wrapper.instance().searchProducts(e);
    const products = wrapper.state('products');
    if(products.length >0){
      products.forEach(function(product){
        expect(product.productName.concat(' ' + product.type).toLowerCase()).toContain(value_1.toLowerCase());
      })
    }
    else {
      const count = products.length;
      expect(count).toBe(0);
    }

  });
});
