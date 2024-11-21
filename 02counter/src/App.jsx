import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter, setCounter] = useState(15) //usestate is a hook ye UI m value ko change krne m help krte h

// let counter = 15

const addValue = ()=>{
  if(counter<20){
  counter = counter+1
  setCounter(counter)}
  else{
    setCounter(20)
  }
  
}
const removeValue = ()=>{
  // counter = counter-1
  if(counter>0){
    setCounter(counter-1)
  }else{
    setCounter(0)
  }
}

  return (
    <>
     <h1>chai aur code</h1>
     <h2>Counter Value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
