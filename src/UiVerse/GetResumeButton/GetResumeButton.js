import React from "react";
import classes from "./GetResumeButton.module.css";
import vinay from "../../Assets/resume.pdf";

const GetResumeButton = () => {
  return (
    <a href={vinay} download={"Vinay Resume.pdf"}>
      <button className={classes.button}>
        {" "}
        <span></span>
        Resume
      </button>
    </a>
  );
};

export default GetResumeButton;
