import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = () => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/" active>
      Projects
    </NavigationItem>
    <NavigationItem linl="/">Portfolio</NavigationItem>
    <NavigationItem linl="/">Testimonials</NavigationItem>
    <NavigationItem linl="/">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
