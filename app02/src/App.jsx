import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {

    setItems([...items , userInput]);

  }
  return (
    <div>
      <input value={userInput} onChange={(event) => { setUserInput(event.target.value) }} />
      <button onClick={addItem}>Aggiungi</button>
      { items.map((elemento, indice) => <li key={indice}>{elemento}</li>)}
    </div>
  )
}

export default App
