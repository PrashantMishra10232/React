import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//hum functions ko direct yha bhi likh skte h 
function MyApp(){
  return(
    <div>
      <h3>calling function directly in the main.js</h3>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherApp = (
  <a href="https://google.com" target='_blank'>visit google</a>
)


//correct syntax
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google!'
)

const ParaElement = React.createElement(
  'p',
  {style: {color: 'blue',
    fontSize: '2rem'
  }},
  'hi my name is pokemon'
)

createRoot(document.getElementById('root')).render(
    ParaElement
)
 