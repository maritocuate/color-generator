import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/app.scss'
import SingleColor from './SingleColor'

import values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('ok')
  }

  return (
    <>
    <div className="container">
      <h3>Color Generator</h3>
      <form className="row" onSubmit={handleSubmit}>
        <input
          className="form-control"
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
      <p>list</p>
    </div>
    </>
  );
}

export default App;
