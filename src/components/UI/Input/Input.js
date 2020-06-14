import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElements}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElements}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElements}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return <div className={classes.Input}>{inputElement}</div>;
};
export default input;
