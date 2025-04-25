import Styles from "./Display.module.css";

const Display = ({ displayVal }) => {
  return <input type="text" id={Styles.display} value={displayVal} readOnly />;
};

export default Display;
