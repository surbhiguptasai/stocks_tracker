import React, {Component} from 'react'

class StockInfo extends Component {
  render() {
    let stock = this.props.stock
    return (
      <div
        className="w3-display-container w3-card w3-pale-blue w3-left w3-margin w3-padding"
        style={{width: 580}}
      >
        <div className=" w3-display-topright">
          <span className="" onClick={this.props.onClick}>
            <i className="fa fa-times" />
          </span>
        </div>
        <div className="w3-row">
          <div className="w3-half w3-center">
            <h6>Company Name: {stock.quote.symbol}</h6>
          </div>
          <div className="w3-half w3-center">
            <h6>Latest Price: {stock.quote.latestPrice}</h6>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-half w3-center">
            <h6>Pre-Closing Price: {stock.quote.previousClose}</h6>
          </div>
          <div className="w3-half w3-center">
            <h6>High: {stock.quote.high}</h6>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-half w3-center">
            <h6>Low: {stock.quote.low}</h6>
          </div>
          <div className="w3-half w3-center">
            <h6>Opens at: {stock.quote.open}</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default StockInfo
