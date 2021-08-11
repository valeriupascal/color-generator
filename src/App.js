import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  const [count, setCount] = useState(0);


const handleSubmit = (e) => {
  e.preventDefault();
  try {
    let amount = parseInt(count)
    let colors = new Values(color).all(amount);
    setList(colors);
  } catch (error) {
    setError(true)
    console.log(error);
  }
}

  return (
  <>
  <section className="container">
   <h3>color generator</h3>
   <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" className={`${error ? 'error' : null}`}/>
      <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
      <button className="btn" type="submit">
        submit
      </button>
        
   </form>
  </section>
  
  <section className="colors">
    {list.map((color, index) => {
      console.log(color);
      return <SingleColor key={index} {...color} index={index} 
      hexColor={color.hex}/>
    })}
  </section>
  </>
  )
}

export default App
