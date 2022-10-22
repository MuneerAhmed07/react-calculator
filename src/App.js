import { useState } from "react";

function App() {

  // Using Use state 

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
      return;
    }

    setCalc(calc + value);

    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  // Create a Digit using a Function
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())}
        key={i}>{i}</button>
      )
    }
    
    return digits;
  }

  // For Anuual result
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  // For delete the last digits
  const deleteLast = () => {
    if(calc === '') {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        {/* For display  */}
        <div className="display">
          {result ? <span>({result})</span> : ''} {calc || "0"}
        </div>
        {/* For operators  */}
        <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>

            <button onClick={deleteLast}>DEL</button>
        </div>
        {/* For digits */}
        <div className="digits">
            { createDigits() }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
