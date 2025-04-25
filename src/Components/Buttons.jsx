import Styles from "./Buttons.module.css";

function Buttons({ ButtonNames, btnClick }) {
  return (
    <>
      <button className={Styles.button} onClick={() => btnClick(ButtonNames)}>
        {ButtonNames}
      </button>
    </>
  );
}
export default Buttons;
