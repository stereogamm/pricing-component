import { useState } from "react";
import "../styles/App.css";
import monthlyData from "./monthlyData";
import annuallyData from "./annuallyData";

import Card from "./Card";
import Toggle from "./Toggle";

function App() {
  const [value, setValue] = useState(false);
  //true=annually payment, false=monthly payment

  function toggleState(event) {
    setValue(event.target.checked);
  }

  return (
    <>
      <main className="main">
        <h1>Our Pricing</h1>
        <Toggle onChange={toggleState} />
        <Card data={value ? monthlyData : annuallyData} />
      </main>
    </>
  );
}

export default App;
