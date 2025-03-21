import { useState } from "react";
import "../styles/App.css";
import monthlyData from "../Data/monthlyData";
import annuallyData from "../Data/annuallyData";

import Card from "./Card";
import Toggle from "./Toggle";

function App() {
  //true=annually payment, false=monthly payment
  const [isYearly, setIsYearly] = useState(false);

  function togglePayPlan(event) {
    setIsYearly(event.target.checked);
  }
  
  return (
    <>
      <main className="main">
        <h1 tabIndex="0">Our Pricing</h1>
        <Toggle isYearly={isYearly} togglePayPlan={togglePayPlan} />
        <Card data={isYearly ? annuallyData : monthlyData}  />
      </main>
    </>
  );
}

export default App;
