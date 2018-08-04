import React from 'react'
import {StockApp, AddStock, Chart, Footer} from './components'

const App = () => {
  return (
    <div className="main container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-12 w3-container w3-blue-grey">
          <h1 className="title text-sm-center">STOCKS TRACKER</h1>
        </div>
        <div className="col-sm-12">
          <AddStock />
        </div>
        <div className="col-sm-12 stockimg">
          <StockApp />
        </div>

        <div className="col-sm-12">
          <Chart />
        </div>
        <div className="col-sm-12">
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
