import React, {Component} from 'react'
// import './App.css';
import StockInfo from './stockinfo'
import {loadQuoteForStock, loadStockSymbols, loadBatchStocks} from './iex'
//import SearchInput, {createFilter} from 'react-search-input'
const KEYS_TO_FILTERS = ['symbol']

class StockApp extends Component {
  state = {
    symbol: 'F',
    quote: null,
    stockSymbols: ['AAPL'],
    stockData: [],
    loaded: false
  }

  componentDidMount() {
    this.loadQuote()
    this.batchStocksLoader()
    // this.loadStocks()
  }
  // loadStocks() {
  //   let symbols = []
  //   loadStockSymbols()
  //     .then(data => {
  //       console.log(data)
  //       this.setState({stockSymbols: data})
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  batchStocksLoader() {
    loadBatchStocks(this.state.stockSymbols)
      .then(quote => {
        console.log('Quote is ' + quote)
        let arr = []

        Object.keys(quote).forEach(function(key) {
          arr.push(quote[key])
        })
        this.setState({stockData: arr})
        this.setState({loaded: true})
      })
      .catch(err => {
        console.log(err)
      })
  }
  loadQuote() {
    loadQuoteForStock(this.state.symbol)
      .then(quote => {
        // console.log(quote)
        this.setState({quote: quote})
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSymbolChange = event => {
    const target = event.target
    const symbol = target.value
    this.setState({symbol: symbol})
    console.log(event)
  }

  handleButtonClick = event => {
    console.log('Event.target is ' + this.state.symbol)
    var arr = this.state.stockSymbols
    arr.push(this.state.symbol)
    this.setState({stockSymbols: arr})
    this.batchStocksLoader()
  }

  render() {
    // console.log('this.state.stockData' + JSON.stringify(this.state.stockData))
    if (this.state.loaded) {
      return (
        <div className="App">
          <h1>Wolf of React</h1>

          <input
            value={this.state.symbol}
            placeholder="Enter symbol"
            onChange={this.handleSymbolChange}
          />
          <button onClick={this.handleButtonClick}>Add</button>
          {this.state.stockData.map(stock => (
            <div key={stock.quote.symbol}>
              <StockInfo stock={stock} />
            </div>
          ))}
        </div>
      )
    } else {
      return <div>Loading....</div>
    }
  }
}

export default StockApp
