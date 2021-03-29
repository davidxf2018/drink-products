import React, {Component} from 'react';

export default class Filter extends Component{
  render() {
    return (
      <div className = "filter">
        <div className = "filter-count">
          {this.props.count} Items
        </div>
        <div className ="filter-by">
          Filter By
          <select value={this.props.type} onChange={this.props.filterProducts}>
            <option value="All">All</option>
            <option value="Beer">Beer</option>
            <option value="Wine">Wine</option>
            <option value="Spirits">Spirits</option>
            <option value="Cider">Cider</option>
          </select>
        </div>
      </div>


    )
  }
}
