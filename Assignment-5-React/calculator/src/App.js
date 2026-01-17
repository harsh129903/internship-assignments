import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const calculate = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res = 0;
    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
            setResult('Cannot divide by zero');
            return;
        }
        res = number1 / number2;
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      
      <div className="input-group">
        <input 
          type="number" 
          placeholder="Enter number 1" 
          value={num1}
          onChange={handleNum1Change}
        />
        <input 
          type="number" 
          placeholder="Enter number 2" 
          value={num2}
          onChange={handleNum2Change}
        />
      </div>

      <div className="button-group">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
      </div>

      <div className="result-display">
        {result !== null && <h3>Result: {result}</h3>}
      </div>
    </div>
  );
}

export default App;