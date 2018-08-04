export const ADD_SYMBOL = 'ADD_SYMBOL'
export const REMOVE_SYMBOL = 'REMOVE_SYMBOL'
export const LOAD_STOCKS = 'LOAD_STOCKS'
export const LOADING = 'LOADING'
export const ACTION_FAILURE = 'ACTION_FAILURE'
export const ACTION_SUCCESS = 'ACTION_SUCCESS'

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
