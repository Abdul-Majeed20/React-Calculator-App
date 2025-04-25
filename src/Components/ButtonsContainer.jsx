import Buttons from "./Buttons";

import Styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={Styles.buttonContainer}>
      {buttonNames.map((name) => (
        <Buttons key={name} ButtonNames={name} btnClick={onButtonClick} />
      ))}
    </div>
  );
};
export default ButtonsContainer;
