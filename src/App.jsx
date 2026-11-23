import React, { useState } from 'react'

function App() {

  const submitHandler = (e)=>{
    e.preventDefault()
   
  };

  const [name , setName] = useState("hello")

  const textupdate= (e)=>{


    // if this 
    // if this 
    // if this 
    // use validation
   setName(e.target.value)

    console.log(name)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='enter your name ' onChange={textupdate} /> <br />
        <button type="submit">submit</button>
      </form>
      <h1>the name is {name} </h1>
    </>
  )
}

export default App


// variable  -> ui 