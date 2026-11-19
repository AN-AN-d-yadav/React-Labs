import React from "react";

function App() {
  return (
    <>
      <div className="container-fluid">

        <div className="row">
          <div className="col-sm-12 bg-info p-3">
            navigation bar
          </div>
        </div>

        <div className="row h-25">
          <div className="col-sm-12 bg-danger h-100">
            header
          </div>
        </div>

        <div className="row h-75">
          <div className="col-sm-6 bg-secondary ">left</div>
          <div className="col-sm-6 bg-dark">right</div>
        </div>

        <div className="row h-25">
          <div className="col-sm-12 bg-warning">
            footer
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
