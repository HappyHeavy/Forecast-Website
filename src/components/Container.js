import classes from "./Container.module.css";

const Container = ({ children }) => {
  return <section className={classes.container}>{children}</section>;
};

export default Container;
