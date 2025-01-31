import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import phoneData from "./data/json/phone.json"

function App() {

  console.log(phoneData);
  const [lowPriceOnly, setLowPriceOnly] = useState(false)
  return (
    <>
      <ul>
        {
          phoneData.map((data, key)=>{
            if((lowPriceOnly && data.price <= 1000) || lowPriceOnly === false){
              return (
              <li key={key}>{data.name} for {data.price}€</li>
              )
            }
          })
        }
      </ul>
       
       <button onClick={()=>{setLowPriceOnly(!lowPriceOnly)}} className={lowPriceOnly == true ? "active" : ""}>
        low price
       </button>
    </>
  )
}

export default App
