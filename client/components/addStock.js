import React, {Component} from 'react'
import {addStock} from '../actions/stock'
import {batchStocksLoader} from '../store/stocks'
import {chartLoader} from '../store/charts'
import {connect} from 'react-redux'

class AddStock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: ''
    }
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.submitStockCode = this.submitStockCode.bind(this)
  }

  handleCodeChange(e) {
    this.setState({code: e.target.value.trim()})
  }

  async submitStockCode(e) {
    e.preventDefault()
    if (this.state.code !== '') {
      this.setState({code: ''})
      await this.props.addStock(this.state.code)
      this.props.batchStocksLoader(this.props.stockSymbols)
      //this.props.chartLoader(this.state.code)
    }
  }

  render() {
    const hasError = this.props.notification.hasOwnProperty('message')
    return (
      <div className="add-stock-container">
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Stock symbol e.g. AAPL"
            value={this.state.code}
            onChange={this.handleCodeChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={this.submitStockCode}>
              Add
            </button>
          </span>
        </div>
        {hasError && (
          <div className="alert alert-danger" role="alert">
            {this.props.notification.message}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notification: state.notification,
  symbols: state.symbols,
  stockSymbols: state.stockSymbols
})

const mapDispatchToProps = dispatch => {
  return {
    addStock: symbol => dispatch(addStock(symbol)),
    batchStocksLoader: symbols => dispatch(batchStocksLoader(symbols)),
    chartLoader: symbols => dispatch(chartLoader(symbols))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStock)
