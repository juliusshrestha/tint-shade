import React from "react";
import classes from "./NavigationItem.css";
const navigationItem = (props) => {
  return (
    <li className={classes.navigationItem}>
      <a herf={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
