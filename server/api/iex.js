import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable'
})

export function loadQuoteForStock(symbol) {
  return api.get(`/stock/${symbol}/quote?token=pk_949cbfb4b4ac4abb82181f7ac5a93080`).then(res => {
    return res.data
  })
}

export function loadStockSymbols() {
  return api.get(`/ref-data/symbols?token=pk_949cbfb4b4ac4abb82181f7ac5a93080`).then(res => {
    return res.data
  })
}

export function loadBatchStocks(stockSymbols) {
  if (stockSymbols !== null && stockSymbols.length !== 0) {
    return api
      .get(
        `/stock/market/batch?token=pk_949cbfb4b4ac4abb82181f7ac5a93080&symbols=${stockSymbols}&types=quote,chart&range=2y`
      )
      .then(res => {
        return res.data
      })
  }
}
