import { useState } from 'react'
import './App.css'
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello World!</h1>
    <Cards />
    <Cards />
    </>
  )
}

export default App
