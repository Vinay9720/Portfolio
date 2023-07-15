import React from "react";
import classes from "./Skills.module.css";
import htmllogo from "../../../Assets/html.png";
import css3logo from "../../../Assets/css.png";
import jslogo from "../../../Assets/js.png";
import reactlogo from "../../../Assets/react.png";
import nextlogo from "../../../Assets/next.png";
import { useIntersectionObserver } from "@uidotdev/usehooks";

function Skills() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  return (
    <div>
      <div className={classes.head} id="skills">
        <h2>Skills</h2>
      </div>
      <div ref={ref}>
        {entry?.isIntersecting && (
          <div className={classes.container}>
            <div className={classes.skills}>
              <h2 style={{ color: "orangered" }}>HTML</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={htmllogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.htmlprogress}></div>
                </div>
              </div>
              <h2 style={{ color: "#5fc1e2" }}>CSS</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={css3logo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.cssprogress}></div>
                </div>
              </div>
              <h2 style={{ color: "yellow" }}>JS</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={jslogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.jsprogress}></div>
                </div>
              </div>
              <h2 style={{ color: "#5fc1e2" }}>REACT</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={reactlogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.reactprogress}></div>
                </div>
              </div>
              <h2 style={{ color: "greenyellow" }}>NEXT JS</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={nextlogo} alt="next js" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.nextProgress}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      ;
    </div>
  );
}

export default Skills;
