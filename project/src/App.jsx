import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  // let counter=5

  const addValue=()=>{
    if(counter<=19){
    counter++
    setCounter(counter);
    }
    console.log(counter)
  }

  const removeValue=()=>{
    if(counter>=1){
    counter--;
    setCounter(counter)
    }
    console.log(counter)
  }

  return (
    <>
      <h1>Abhishek</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
