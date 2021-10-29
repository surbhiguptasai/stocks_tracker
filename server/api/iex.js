import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable'
})

export function loadQuoteForStock(symbol) {
  return api.get(`/stock/${symbol}/quote?token=pk_337debccd62a4388b9a7ed27dbbb7495`).then(res => {
    return res.data
  })
}

export function loadStockSymbols() {
  return api.get(`/ref-data/symbols?token=pk_337debccd62a4388b9a7ed27dbbb7495`).then(res => {
    return res.data
  })
}

export function loadBatchStocks(stockSymbols) {
  if (stockSymbols !== null && stockSymbols.length !== 0) {
    return api
      .get(
        `/stock/market/batch?token=pk_337debccd62a4388b9a7ed27dbbb7495&symbols=${stockSymbols}&types=quote,chart&range=1m&last=5`
      )
      .then(res => {
        return res.data
      })
  }
}
