import React from "react";
import classes from "./CustomButton.module.css";
import smiley from "../../Assets/smiley.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomButton = () => {
  const notify = () => toast("Contact through Mail or Phone Call");

  return (
    <>
      <div className={classes.button} onClick={notify}>
        <div>
          <span>
            <p>Hire Me</p>
          </span>
        </div>
        <div>
          <span>
            <a href="#contact">
              <img src={smiley} alt="smiley" />
            </a>
          </span>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CustomButton;
