import React, {Component} from 'react'
// import './App.css';
import StockInfo from './stockinfo'
import {batchStocksLoader} from '../store/stocks'
import {addStock, removeStock} from '../actions/stock'
// import {
//   loadQuoteForStock,
//   loadStockSymbols,
//   loadBatchStocks,
//   loadCharts
// } from '../../server/api/iex'
import {connect} from 'react-redux'
//import SearchInput, {createFilter} from 'react-search-input'
const KEYS_TO_FILTERS = ['symbol']

class StockApp extends Component {
  constructor() {
    super()
    this.state = {
      symbol: 'F',
      quote: null,
      stockSymbols: ['AAPL', 'MSFT'],
      stockData: [],
      loaded: false
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
  }

  async componentDidMount() {
    //this.loadQuote()
    await this.props.addStock(this.state.stockSymbols)
    console.log(
      'this.props.stockSymbols is ' + JSON.stringify(this.props.stockSymbols[0])
    )
    await this.props.batchStocksLoader(this.props.stockSymbols)
    //this.props.addStock(this.state.stockSymbols)
  }

  handleSymbolChange = event => {
    const target = event.target
    const symbol = target.value
    this.setState({symbol: symbol})
    console.log(event)
  }

  // handleButtonClick = event => {
  //   console.log('Event.target is ' + this.state.symbol)
  //   var arr = this.state.stockSymbols
  //   arr.push(this.state.symbol)
  //   this.setState({stockSymbols: arr})
  //   this.batchStocksLoader(this.props.stockSymbols)
  //   this.chartLoader()
  // }
  async handleRemoveClick(code) {
    await this.props.removeStock(code)
    console.log('this.props.stockSymbols is ' + this.props.stockSymbols)
    this.props.batchStocksLoader(this.props.stockSymbols)
  }
  render() {
    // console.log('this.state.stockData' + JSON.stringify(this.state.stockData))

    return (
      <div className="App">
        <h1>Stocks Tracker</h1>

        {/* <input
          value={this.state.symbol}
          placeholder="Enter symbol"
          onChange={this.handleSymbolChange}
        />
        <button type="button" onClick={this.handleButtonClick}>
          Add
        </button> */}
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
