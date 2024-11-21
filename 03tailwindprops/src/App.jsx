import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    userName: "Prashant",
    age: 22
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="Prashant" titleText="click me"/>
      <Card userName="chaiAurCode" titleText="visit me"/>
      
    </>
  )
} 

export default App