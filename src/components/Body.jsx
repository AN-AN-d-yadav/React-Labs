import React from 'react'
import Sidebar from './Sidebar'

function Body() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
            <Sidebar/>
        </div>
        <div className="col-sm-9"></div>
      </div>
    </div>
  )
}

export default Body
