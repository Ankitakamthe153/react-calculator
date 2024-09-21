import React, { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!input1 || !input2) {
      setError('Both fields are required');
      setResult(null);
      return false;
    }
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      setResult(null);
      return false;
    }
    setError('');
    return true;
  };

  const calculate = (operation) => {
    if (!validateInputs()) return;

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    let calcResult;
    switch (operation) {
      case 'add':
        calcResult = num1 + num2;
        break;
      case 'subtract':
        calcResult = num1 - num2;
        break;
      case 'multiply':
        calcResult = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setError('Cannot divide by zero');
          setResult(null);
          return;
        }
        calcResult = num1 / num2;
        break;
      default:
        return;
    }
    setResult(calcResult);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div className="button-container">
        <button onClick={() => calculate('add')}>+</button>
        <button onClick={() => calculate('subtract')}>-</button>
        <button onClick={() => calculate('multiply')}>*</button>
        <button onClick={() => calculate('divide')}>/</button>
      </div>

      {error && <div className="error-message">{error}</div>}
      {result !== null && !error && (
        <div className="result-message">Result: {result}</div>
      )}
    </div>
  );
}

export default App;
