import React from 'react'
import PropTypes from 'prop-types'
import '../styles/stock.css'

const Stock = ({code, description, onClick}) => (
  <div className="stock col-sm-4">
    <p className="stock-code">
      <span>{code}</span>
      <span className="float-sm-right" onClick={onClick}>
        <i className="fa fa-times" />
      </span>
    </p>
    <p className="stock-description">{description}</p>
  </div>
)

Stock.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Stock

module.exports = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
