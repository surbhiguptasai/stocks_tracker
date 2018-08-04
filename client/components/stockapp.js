import React, {Component} from 'react'
import StockInfo from './stockinfo'
import {batchStocksLoader} from '../store/stocks'
import {addStock, removeStock} from '../actions/stock'
import {connect} from 'react-redux'

class StockApp extends Component {
  constructor() {
    super()
    this.state = {
      stockSymbols: ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'TWTR', 'NFLX', 'VZ']
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
  }

  async componentDidMount() {
    await this.props.addStock(this.state.stockSymbols)
    await this.props.batchStocksLoader(this.props.stockSymbols)
  }

  async handleRemoveClick(code) {
    await this.props.removeStock(code)
    this.props.batchStocksLoader(this.props.stockSymbols)
  }
  render() {
    return (
      <div className="App">
        {this.props.stocks.map(stock => (
          <div key={stock.quote.symbol}>
            <StockInfo
              stock={stock}
              onClick={() => this.handleRemoveClick(stock.quote.symbol)}
            />
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  stocks: state.stocks,
  stockSymbols: state.stockSymbols
})

const mapDispatchToProps = dispatch => {
  return {
    batchStocksLoader: symbols => dispatch(batchStocksLoader(symbols)),
    addStock: symbol => dispatch(addStock(symbol)),
    removeStock: code => dispatch(removeStock(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockApp)
