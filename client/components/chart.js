import React, {Component} from 'react'
import {connect} from 'react-redux'
import configureHighcharts from '../utils/highchartsConfig'
import {chartLoader} from '../store/charts'

const ReactHighstock = require('react-highcharts/ReactHighstock')

class Chart extends Component {
  constructor() {
    super()
    // this.state = {
    //   stockSymbols: ['AAPL', 'MSFT']
    // }
    this.getData = this.getData.bind(this)
  }

  getData(chartData) {
    let out = []
    for (let j = 0; j < chartData.length; j++) {
      let tmp = []
      let date = new Date(chartData[j].date).getTime()
      //console.log('date is ' + date)
      let price = chartData[j].open
      tmp.push(date)
      tmp.push(price)
      //Econsole.log(tmp)
      out[j] = tmp
    }
    return out
  }
  // async componentDidMount() {
  //   console.log('Calling chartloader')
  //   await this.props.chartLoader(this.state.stockSymbols)
  //   console.log('after chartloader' + JSON.stringify(this.props.stockSymbols))
  // }
  render() {
    if (
      this.props.stocks !== undefined &&
      this.props.stocks !== null &&
      this.props.stocks !== null &&
      Object.keys(this.props.stocks).length != 0
    ) {
      //console.log('this.props.charts ' + JSON.stringify(this.props.charts))
      let chartArr = this.props.stocks
      // for(i=0;i<chartArr.length;i++)
      // {

      // }
      // console.log('Chart is ' + JSON.stringify(chartArr))
      const series = chartArr.map(chart1 => {
        //console.log('Chart1 is ' + JSON.stringify(chart1.chart))
        let out = this.getData(chart1.chart)
        //console.log('out is  ' + out)
        return {
          data: out,
          // [
          //   {345427200000: 28.75},
          //   {345686400000: 27.38},
          //   {354758400000: 24.75}
          // ],
          name: chart1.symbol
        }
      })
      const config = configureHighcharts(series)
      // Render Chart onl=0y when data is available
      if (this.props.stocks.length !== 0) {
        return <ReactHighstock config={config} ref="chart" />
      } else {
        return <div />
      }
    } else {
      return <div>Loading</div>
    }
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks,
  stockSymbols: state.stockSymbols
})
// const mapDispatchToProps = dispatch => {
//   return {
//     chartLoader: symbols => dispatch(chartLoader(symbols))
//   }
// }

export default connect(mapStateToProps, null)(Chart)
