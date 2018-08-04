import store from '../store'

export const ADD_SYMBOL = 'ADD_SYMBOL'
// export const LOAD_CHARTS = 'LOAD_CHARTS'
export const REMOVE_SYMBOL = 'REMOVE_SYMBOL'
export const LOAD_STOCKS = 'LOAD_STOCKS'
export const LOADING = 'LOADING'
export const ACTION_FAILURE = 'ACTION_FAILURE'
export const ACTION_SUCCESS = 'ACTION_SUCCESS'

/* setup socket */

export const socket = require('socket.io-client').connect()

/* socket listeners */

socket.on('load stocks', res => {
  store.dispatch({
    type: LOAD_STOCKS,
    stocks: res
  })
  store.dispatch({
    type: ACTION_SUCCESS
  })
})

socket.on('add stock code', res => {
  store.dispatch({
    type: ADD_STOCK,
    code: res.code,
    description: res.description,
    data: res.data,
    id: res.id
  })
  store.dispatch({
    type: ACTION_SUCCESS
  })
})

socket.on('delete stock code', id => {
  console.log(id)
  store.dispatch({
    type: REMOVE_STOCK,
    id
  })
  store.dispatch({
    type: ACTION_SUCCESS
  })
})

socket.on('action has failed', message => {
  store.dispatch({
    type: ACTION_FAILURE,
    message
  })
})

socket.on('action is loading', () => {
  store.dispatch({
    type: LOADING
  })
})

/* actions */
export const getStocks = stocks => ({type: LOAD_STOCKS, stocks})
export const addStock = code => ({
  type: ADD_SYMBOL,
  code
})
export const removeStock = code => ({
  type: REMOVE_SYMBOL,
  code
})
// export const addChartData = charts => ({type: LOAD_CHARTS, charts})
