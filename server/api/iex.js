import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
})

export function loadQuoteForStock(symbol) {
  return api.get(`/stock/${symbol}/quote`).then(res => {
    return res.data
  })
}

export function loadStockSymbols() {
  return api.get(`/ref-data/symbols`).then(res => {
    return res.data
  })
}

export function loadBatchStocks(stockSymbols) {
  if (stockSymbols !== null && stockSymbols.length !== 0) {
    return api
      .get(
        `/stock/market/batch?symbols=${stockSymbols}&types=quote,chart&range=2y&last=4`
      )
      .then(res => {
        return res.data
      })
  }
}
