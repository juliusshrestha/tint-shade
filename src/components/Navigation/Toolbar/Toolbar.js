import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
const toolbar = (props) => (
  <header className={classes.toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.logo}>
      <Logo />
    </div>

    <nav className={classes.desktopOnly}>
      <NavigationItems />
    </nav>

    <div className={classes.info}>
      <FaPhoneAlt />
      &nbsp;&nbsp;(03) 9904 9955
      <br />
      <FiMail />
      &nbsp;&nbsp;
      <a
        href="mailto:tintshade@outlook.com"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        tintshade@outlook.com
      </a>
    </div>
  </header>
);

export default toolbar;
