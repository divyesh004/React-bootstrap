import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center bg-info" style={{ border: "1px solid balck" }}>
          <div className="col-6 text-start ps-5">
            <h1 style={{ fontSize: "90px" }}>Hi,Hi I'm John Deo.</h1>
            <p className="text-light my-3" style={{ fontSize: "18px" }}>A freelancer Web devloper from London. I convert custom web designs to bootstrap templates</p>
            <p className="text-light" style={{ fontSize: "18px" }}>I make YouTube videos and write Blog</p>
            <button className="rounded">I'M AVAILABLE</button>
            <div className="my-3 col-3">
              <ul className="list-unstyled d-flex justify-content-between">
                <li><a href="#" className="text-dark"><i class="bi bi-facebook"></i></a></li>
                <li><a href="#" className="text-dark"><i class="bi bi-twitter"></i></a></li>
                <li><a href="#" className="text-dark"><i class="bi bi-instagram"></i></a></li>
                <li><a href="#" className="text-dark"><i class="bi bi-youtube"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <img src="src\componets\i1.png" className="img-fluid"></img>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
