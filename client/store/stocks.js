import {REMOVE_STOCK, LOAD_STOCKS} from '../actions/stock'
import {
  loadQuoteForStock,
  loadStockSymbols,
  loadBatchStocks,
  loadCharts
} from '../../server/api/iex'
import {getStocks, addStock, addChartData} from '../actions/stock'
export const batchStocksLoader = symbols => async dispatch => {
  console.log('inside loadbatch')
  try {
    console.log('symbols is ' + JSON.stringify(symbols))
    if (symbols.length !== 0) {
      const res = await loadBatchStocks(symbols)
        .then(data => {
          console.log('Data is ' + data)
          let arr = []

          Object.keys(data).forEach(function(key) {
            arr.push(data[key])
          })
          console.log('arr', arr)
          dispatch(getStocks(arr))
          // this.setState({stockData: arr})
          // this.setState({loaded: true})
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      let arr = []
      dispatch(getStocks(arr))
    }
  } catch (err) {
    console.error(err)
  }
}

const stocks = (state = [], action) => {
  switch (action.type) {
    case LOAD_STOCKS:
      return action.stocks

    default:
      return state
  }
}

export default stocks
