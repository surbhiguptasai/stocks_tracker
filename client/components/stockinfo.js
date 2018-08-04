import React, {Component} from 'react'

class StockInfo extends Component {
  render() {
    let stock = this.props.stock
    return (
      <div className="stock col-sm-4 w3-card w3-light-grey">
        <p className="stock-code">
          <span>{stock.quote.symbol}</span>
          <span className="float-sm-right" onClick={this.props.onClick}>
            <i className="fa fa-times" />
          </span>
        </p>
        <p>{stock.quote.latestPrice}</p>
      </div>
    )
  }
}

export default StockInfo
