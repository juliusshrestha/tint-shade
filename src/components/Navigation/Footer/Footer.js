import React from "react";
import classes from "./Footer.css";

const footer = (props) => (
  <footer className={classes.footer}>
    <div className={classes.footer2}>
      <div className={classes.about}>
        <h3>About</h3>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className={classes.quickNav}>
        <h3>Quick Navigation</h3>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className={classes.quickCon}>
        <h3>Quick Control</h3>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <p className={classes.cpy}>@copyright</p>
  </footer>
);

export default footer;
