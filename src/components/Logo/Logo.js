import React from "react";
import tsLogo from "../../assets/images/ts-logo.png";
import classes from "./Logo.css";
const logo = (props) => (
  <div className={classes.logo}>
    <img src={tsLogo} alt="TintShade" />
  </div>
);

export default logo;
