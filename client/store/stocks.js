import {LOAD_STOCKS, getStocks} from '../actions/stock'
import {loadBatchStocks} from '../../server/api/iex'

export const batchStocksLoader = symbols => async dispatch => {
  try {
    if (symbols.length !== 0) {
      await loadBatchStocks(symbols)
        .then(data => {
          let arr = []

          Object.keys(data).forEach(function(key) {
            arr.push(data[key])
          })
          dispatch(getStocks(arr))
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
