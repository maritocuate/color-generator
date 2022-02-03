import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/app.scss'
import SingleColor from './SingleColor'

import values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  
  const handleSubmit = e => {
    e.preventDefault()
    try{
      let colors = new values(color).all(10)
      setList(colors)
    }catch(error) {
      setError(true)
    }
  }

  return (
    <>
    <div className="container">
      <h3>Color Generator</h3>
      <form className="row" onSubmit={handleSubmit}>
        <input
          className={`form-control ${error?'error':null}`}
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button 
          className="btn-primary btn"
          type="submit">Send
        </button>
      </form>
    </div>
    <div className="colors">
      {list.map((colors, i) => {
        return <SingleColor key={i} {...color} index={i} />
      })}
    </div>
    </>
  );
}

export default App;
