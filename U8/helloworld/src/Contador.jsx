import { useState } from 'react'
import './App.css'

function Contador() {
  const [count, setCount] = useState(0)
  function add(){
    setCount(count + 1);
    span.innerHTML = count;
  }

  return (
    <div className="App">
        <h1>Has pulsado el botón <span id="span">0</span> veces</h1>
        <button onClick={add}>Click</button>
    </div>
  )
}

export default Contador
