import React, {Component} from 'react'
import {connect} from 'react-redux'
import configureHighcharts from '../utils/highchartsConfig'

const ReactHighstock = require('react-highcharts/ReactHighstock')

class Chart extends Component {
  constructor() {
    super()
    this.getData = this.getData.bind(this)
  }

  getData(chartData) {
    let out = []
    for (let j = 0; j < chartData.length; j++) {
      let tmp = []
      let date = new Date(chartData[j].date).getTime()
      let price = chartData[j].open
      tmp.push(date)
      tmp.push(price)
      out[j] = tmp
    }
    return out
  }

  render() {
    if (
      this.props.stocks !== undefined &&
      this.props.stocks !== null &&
      this.props.stocks !== null &&
      Object.keys(this.props.stocks).length != 0
    ) {
      let chartArr = this.props.stocks

      const series = chartArr.map(chart1 => {
        let out = this.getData(chart1.chart)
        return {
          data: out,
          name: chart1.quote.symbol
        }
      })
      const config = configureHighcharts(series)
      if (this.props.stocks.length !== 0) {
        return <ReactHighstock config={config} ref="chart" />
      } else {
        return <div />
      }
    } else {
      return (
        <div>
          <h1 className="w3-center">Please add stock symbol e.g. AAPL</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks,
  stockSymbols: state.stockSymbols
})

export default connect(mapStateToProps, null)(Chart)
