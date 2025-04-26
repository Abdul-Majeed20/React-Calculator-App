import Display from "./Components/Display";
import Styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (btnText) => {
    if (btnText === "C") {
      setCalVal("");
    } else if (btnText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + btnText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <center>
      <div className={Styles.calculator}>
        <h3>React Calculator App</h3>
        <Display displayVal={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
