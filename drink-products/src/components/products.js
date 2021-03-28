import React, {Component} from 'react'
import {Row, Col} from 'reactstrap';

export default class Products extends Component {
  render(){
    return(
      <div ClassName="products">
        <Row>
          {this.props.products.map(product => (
            <Col key={product.index} md="3" sm="12">
              <div className = "product py-3 mb-4">
                <div>
                  <img src={"/assets/images/" + product.productImage} alt={product.productName}></img>
                </div>
                <div className ="product-desc">
                  <div>{product.productName}</div>
                  <div className="product-price mt-3">{product.price}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
