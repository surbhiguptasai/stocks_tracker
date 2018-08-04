import React, {Component} from 'react'
// import '../../public'

class StockInfo extends Component {
  handleButtonClick = event => {
    console.log('Event.target is ' + event.target.value)
  }

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
        {/* <dl>
        <dt>Week 52 High</dt>
        <dd>{week52High}</dd>

        <dt>Week 52 Low</dt>
        <dd>{week52Low}</dd>

        <dt>Exchange</dt>
        <dd>{primaryExchange}</dd>
      </dl> */}
      </div>
    )
  }
}

export default StockInfo
