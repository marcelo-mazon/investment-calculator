import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [investParam, setInvestParam] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  function handleInputChange(inputId, value) {
    setInvestParam((prevInvestParam) => {
      return { ...prevInvestParam, [inputId]: +value };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputValues={investParam} onInputChange={handleInputChange} />
      <Results inputValues={investParam} />
    </>
  );
}

export default App;
