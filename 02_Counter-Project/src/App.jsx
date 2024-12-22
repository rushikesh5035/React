import { useState } from "react";
import "./App.css";

function App() {
  let [counter, SetCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      console.log(counter);
      SetCounter(counter + 1);
    } else {
      console.log("You can't increase value above 20");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      SetCounter(counter - 1);
      console.log(counter);
    } else {
      console.log("You can't decrease value below 0");
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>

      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remoe Value</button>
    </>
  );
}

export default App;
