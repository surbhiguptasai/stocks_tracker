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
  return api
    .get(
      `/stock/market/batch?symbols=${stockSymbols}&types=quote&range=1m&last=5`
    )
    .then(res => {
      return res.data
    })
}
//stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5
