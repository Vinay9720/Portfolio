import React from "react";
import classes from "./ImageCard.module.css";
import Vinay from "../../Assets/Vinay.jpg";

const ImageCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <p className={classes.title}>Have A Look</p>
        <div className={classes.cardHidden}>
          <img
            src={Vinay}
            alt="vinay"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className={classes.cardBorder}></div>
    </div>
  );
};
export default ImageCard;
