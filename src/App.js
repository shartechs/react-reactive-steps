import React, { useState } from "react";
import "./index.css";
import { messages } from "./messages";

const App = () => {
  const [step, setStep] = useState(1);
  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div
          className={step === 1 ? "step active" : "step"}
          onClick={() => setStep(1)}
        >
          1
        </div>
        <div
          className={step === 2 ? "step active" : "step"}
          onClick={() => setStep(2)}
        >
          2
        </div>
        <div
          className={step === 3 ? "step active" : "step"}
          onClick={() => setStep(3)}
        >
          3
        </div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          bgColor="#7950f2"
          textColor="#fff"
          disabled={step === 1}
          onClick={handlePrevious}
        >
          <span>👈</span> Previous
        </button>

        <button
          bgColor="#7950f2"
          textColor="#fff"
          disabled={step === 3}
          onClick={handleNext}
        >
          Next <span>👉</span>
          <span>🤓</span>
        </button>
      </div>
    </div>
  );
};

export default App;
