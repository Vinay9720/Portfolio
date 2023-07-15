import { Button } from "@mui/material";
import React from "react";
import classes from "./LeftNavbar.module.css";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const icons = [
  { icon: <InfoOutlinedIcon />, href: "#info" },
  { icon: <KeyboardIcon />, href: "#skills" },
  { icon: <WorkOutlineOutlinedIcon />, href: "#experience" },
  { icon: <ContactMailOutlinedIcon />, href: "#contact" },
];

const LeftNavbar = () => {
  return (
    <div className={classes.leftNavbar}>
      {icons.map((el, i) => (
        <a href={el.href}>
          <Button
            variant="outlined"
            key={i * 9.2783539965}
            sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
          >
            {el.icon}
          </Button>
        </a>
      ))}
    </div>
  );
};

export default LeftNavbar;
