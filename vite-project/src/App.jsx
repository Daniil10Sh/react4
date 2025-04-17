import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
{<h1>Daniil Shcherbakov</h1>}
{<p> "Ласкаво просимо до нашого сайту!".</p>}
 {<img src="./sl" alt="mercedes sl" />}
 {<a href="https://www.lexus.de/">lexus de</a> }
 <p> Сума чисел {number1} і {number2} дорівнює: <strong>{sum}</strong></p>
 <ul className='color-list'>
        {colors.map((color, index) => (
          <li 
            key={index}
          >
            {color}
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
