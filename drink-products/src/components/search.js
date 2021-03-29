import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Search extends Component{
  render() {
    return (
      <Row className="search">
        <Col xl="3" lg ="4" md="6" sm="12" className = " offset-xl-9 offset-lg-8 offset-md-6">
            <input type="text" placeholder="Search products" onChange={this.props.searchProducts}/>
             <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </Col>
      </Row>
    )
  }
}
