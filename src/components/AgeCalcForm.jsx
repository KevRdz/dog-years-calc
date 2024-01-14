import React, {useState} from 'react'

function AgeCalcForm({calculateAge}) {
  const [year, setYear] = useState("")

  function handleChange(e) {
    setYear(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    calculateAge(year)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Out How Old Your Dog Is In Human Years!</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="number"
            placeholder='Enter Dog Age Here'
            value={year}
            onChange={handleChange}
          />
          <button disabled={!year} type='submit' /* onClick={handleSubmit} */>Enter</button>
        </form>
        
      </header>
    </div>
  );
}

export default AgeCalcForm