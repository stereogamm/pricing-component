import { useState } from "react";
import "../styles/App.css";
import monthlyData from "../Data/monthlyData";
import annuallyData from "../Data/annuallyData";

import Card from "./Card";
import Toggle from "./Toggle";

function App() {
  //true=annually payment, false=monthly payment
  const [value, setValue] = useState(false);
  
  function toggleState(event) {
    setValue(event.target.checked);
  }

  return (
    <>
      <main className="main">
        <h1>Our Pricing</h1>
        <Toggle toggleState={toggleState} />
        <Card data={value? monthlyData : annuallyData} />
      </main>
    </>
  );
}

export default App;
