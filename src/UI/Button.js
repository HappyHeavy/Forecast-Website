import classes from "./Button.module.css";

const Button = ({ children, disabled, onClick, className }) => {
  return (
    <button
      className={`${classes.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
