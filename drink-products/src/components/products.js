import React, {Component} from 'react'
import {Row, Col} from 'reactstrap';

export default class Products extends Component {

  //add on sale label
  renderSale(product){
    if(product.isSale){
      return (
        <div className="on-sale">On Sale</div>
      );
    }
  }

  render(){
    return(
      <div className="products">
        <Row>
          {this.props.products.map(product => (
            <Col key={product.index} xl="3" lg="4" md="6" sm="12">
              <div className = "product py-3 mb-4">
                {this.renderSale(product)}
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
