import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Hooks helps in propagating the changed value in the whole UI.
  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => { // The changing counter value would reflect in the console but it won't propagate in the UI so this is y we use hooks
    //console.log("clicked", counter)
    //counter += 1
    if (counter == 25){
      return 
    }
    setCounter(counter + 1)
  }

  const decreaseValue = () => {
    if (counter == 0){
      return 
    } 
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react!</h1>
      <h2>Counter value! {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick = {decreaseValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
