import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ txt }) {
  return <button className={styles.btn}>{txt}</button>;
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Button;
