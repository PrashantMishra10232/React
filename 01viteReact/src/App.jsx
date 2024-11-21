import Chai from "./chai"
function App() {

  const userName = "Prashant"

  return (
    
    //yaha react hume bs ek hi component return krne deta h 
    //isliye hum fragment k use krte h jo single component ki trh behave krta h pr uske andr kitne bhi component likh skte hai
    //ya div tag ka bhi use kr skte h but prefer fragment tag(<></>)
    <>
     <Chai />
     <h1>Chai Aur vite {userName}</h1>
     <p>test para</p>

    </>
    
  )
}

export default App
