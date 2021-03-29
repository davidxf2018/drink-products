import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Search extends Component{
  render() {
    return (
      <Row className="search">
        <Col className = "md-3 sm-12 offset-md-9">
            <input type="text" placeholder="Search products" onChange={this.props.searchProducts}/>
             <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </Col>
      </Row>
    )
  }
}
