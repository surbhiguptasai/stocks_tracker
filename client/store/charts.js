// import {LOAD_CHARTS} from '../actions/stock'
// import {loadCharts} from '../../server/api/iex'
// import {addChartData} from '../actions/stock'

// export const chartLoader = symbols => async dispatch => {
//   console.log('inside chartloader ')
//   try {
//     let arr = []
//     if (symbols instanceof Array) {
//       for (let i = 0; i < symbols.length; i++) {
//         await loadCharts(symbols[i])
//           .then(data => {
//             console.log('symbol is  ' + symbols[i])
//             let obj = {data: data, symbol: symbols[i]}

//             arr.push(obj)
//             // this.setState({stockData: arr})
//             // this.setState({lo aded: true})
//             //dispatch(addChartData(arr))
//           })
//           .catch(err => {
//             console.log(err)
//           })
//       }
//     } else {
//       await loadCharts(symbols)
//         .then(data => {
//           console.log('symbol is  ' + symbols)
//           let obj = {data: data, symbol: symbols}

//           arr.push(obj)
//           // this.setState({stockData: arr})
//           // this.setState({lo aded: true})
//           //dispatch(addChartData(arr))
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     }

//     dispatch(addChartData(arr))
//     console.log('before dispatch')
//   } catch (err) {
//     console.error(err)
//   }
// }

// const chartdata = (state = {}, action) => {
//   switch (action.type) {
//     case LOAD_CHARTS:
//       console.log('Inside Action creator ' + action.charts)
//       return [...state, action.charts]

//     default:
//       return state
//   }
// }

// export default chartdata
