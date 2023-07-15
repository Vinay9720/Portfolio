import React from "react";
import classes from "./AboutMe.module.css";

import CustomButton from "../../../UiVerse/CustomButton/CustomButton";
import GetResumeButton from "../../../UiVerse/GetResumeButton/GetResumeButton";
import ImageCard from "../../../UiVerse/ImageCard/ImageCard";

import { useIntersectionObserver } from "@uidotdev/usehooks";

const HeaderBody = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  console.log("ref", ref);
  console.log("entruy", entry);

  return (
    <div id="info" className={classes.head}>
      <div className={classes.root}>
        <section className={classes.content}>
          <h1>
            Hi There <span className={classes.animate}>I'M Vinay Reddy</span>
          </h1>
          <div className={classes.para}>
            <p>
              I am a Freelance Web Developer located in{" "}
              <span>Hyderabad, India.</span> Well experienced in developing web
              applications using React JS.
            </p>
            <p>
              I have done remote work for agencies, consulted for startups, and
              collaborated with talented people to create digital products for
              both business and consumer use.
            </p>
            <p>
              Well-organised person, problem solver, independent employee with
              high attention to detail. Fan of{" "}
              <span>outdoor activities, TV series</span>.
            </p>
          </div>
          <div className={classes.buttons}>
            <CustomButton />
            <GetResumeButton />
          </div>
        </section>
        <div className={classes.image}>
          <ImageCard />
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
