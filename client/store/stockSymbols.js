import {ADD_SYMBOL, REMOVE_SYMBOL} from '../actions/stock'
// import {loadStockSymbols} from '../../server/api/iex'

const stockSymbols = (state = {}, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      console.log('state is ' + JSON.stringify(state))
      if (
        state !== null &&
        state.length !== 0 &&
        Object.keys(state).length != 0
      ) {
        console.log('Inside Non-zero ')
        let existingSymbols = state
        existingSymbols.push(action.code)
        return existingSymbols
      } else {
        console.log('Inside else  ')
        let codesToAdd = action.code
        if (Array.isArray(codesToAdd)) return action.code
        else {
          return [action.code]
        }
      }
    case REMOVE_SYMBOL:
      let updatedStocks = state
      console.log('updated stock is ' + updatedStocks)
      if (updatedStocks.length == 1) {
        updatedStocks = []
        return updatedStocks
      } else {
        updatedStocks = updatedStocks.filter(function(item) {
          return item.search(action.code) == -1
        })
      }

      console.log('updatedStocks ' + JSON.stringify(updatedStocks))
      return [updatedStocks]

    default:
      return state
  }
}

export default stockSymbols
