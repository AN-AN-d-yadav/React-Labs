import React from "react";

function App() {

  function abc(){
    console.log("Button is clicked")
  }

  return (
    <>
      <button onClick={abc}>click</button>
    </>
  );
}

export default App;
