import React from "react";
import classes from "./Header.module.css";
import images from "../../Assets/images.png";

import TemporaryDrawer from "../../MaterialUi/Drawer/Drawer";

const Header = () => {
  return (
    <div className={classes.header} id="home">
      <div className={classes.name}>
        <img src={images} alt="logo" />
      </div>

      <nav className={classes.nav}>
        <a href="#info">Info</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <div className={classes.hamburger}>
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
