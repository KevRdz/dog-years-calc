import './App.css';
import React, { useState } from 'react';
import AgeCalcForm from './components/AgeCalcForm';

function App() {
  const [age, setAge] = useState(null)

  function calculateAge() {
    console.log("calc age");
  }
  return (
    <div>
      <AgeCalcForm calculateAge={calculateAge}/>
    </div>
  );
}

export default App;
