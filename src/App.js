import './App.css';
import React, { useState } from 'react';

function App() {
  const [year, setYear] = useState(0)

  function handleChange(e) {
    setYear(e.target.value)
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Out How Old Your Dog Is In Human Years!</h1>
        <form>
          <input 
            type="number" 
            placeholder='Enter Dog Year Here' 
            onChange={handleChange}
          />
          <button>Enter</button>
        </form>
        
      </header>
    </div>
  );
}

export default App;
