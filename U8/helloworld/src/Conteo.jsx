import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Conteo() {
  const [count, setCount] = useState(0)
  function add(){
    setCount(count + 1);
  }

  return (
    <div className="App">
        <label htmlFor="time">¿Cuántos segundos vamos a contar?</label><br />
        <input type="number" /><button onClick={contar}>Iniciar</button>
      
    </div>
  )
}

export default Conteo
