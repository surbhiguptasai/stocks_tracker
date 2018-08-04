import {ADD_SYMBOL, REMOVE_SYMBOL} from '../actions/stock'

const stockSymbols = (state = {}, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      if (
        state !== null &&
        state.length !== 0 &&
        Object.keys(state).length !== 0
      ) {
        let existingSymbols = state
        existingSymbols.push(action.code)
        return existingSymbols
      } else {
        let codesToAdd = action.code
        if (Array.isArray(codesToAdd)) return action.code
        else {
          return [action.code]
        }
      }
    case REMOVE_SYMBOL:
      let updatedStocks = state
      if (updatedStocks.length == 1) {
        updatedStocks = []
        return updatedStocks
      } else {
        updatedStocks = updatedStocks.filter(function(item) {
          return item.search(action.code) == -1
        })
      }
      return [updatedStocks]

    default:
      return state
  }
}

export default stockSymbols
