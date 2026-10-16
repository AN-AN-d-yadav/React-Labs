import React, { useState } from 'react'

function App() {

  const [num , setNum] = useState(0)

  function increment(){
    setNum(num+1)
  }

  function decrement(){
    setNum(num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
