import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/ExGame logo.svg'
import Icona from './assets/profilo.png'
import {Description} from './Description'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <a href="">
            <img src={Logo} alt="" className='logo'/>
          </a>
          <ul>
            <li>
              <a href="#" className='sx'>Daschboard</a>
            </li>
            <li>
              <a href="#" className='sx'>Esami</a>
            </li>
          </ul>
        </div>

        <div className="right">
          <ul>
              <li>
                <a href="#" className='dx'>Albe Molon</a>
              </li>
              <li>
                <a href="#" className='dx'>Logout</a>
              </li>
            </ul>
        </div>
      </nav>

      <div className='containername'>
        <div className='profilo-inizio'>
          <div className='contorno'>
            <img src={Icona} alt="" className='icona'/>
            <p>Alberto Molon</p>
          </div>
        </div>
      </div>



      {/* <Description type="info"> Oggi facciamo:
        <ul>
          <li>Esercizio 1</li>
          <li>Esercizio 2</li>
          <li>Esercizio 3</li>
        </ul> 
      </Description>

      <Description type="warning"> 
        Attenzione sarà difficile!
      </Description> */}

    </>
  )
}

export default App
