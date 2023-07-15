import React, { useState } from "react";
import classes from "./Experience.module.css";
import { Typography } from "@mui/material";
import Portfolio from "../TimeLine/Portfolio";
import { workData } from "../TimeLine/WorkHistory";
import { studyData } from "../TimeLine/EducationalHistory";
import { timelineElements } from "../TimeLine/TimelineElements";

const Experience = () => {
  const [workingState, setWokingState] = useState(true);
  const [qualificationState, setQualificationState] = useState(false);
  const [timelineState, setTimelineState] = useState(false);
  return (
    <div>
      <div className={classes.head} id="experience">
        <h2>Experience</h2>
      </div>

      <div className={classes.tabs}>
        <Typography
          variant="h6"
          onClick={() => {
            setWokingState(true);
            setQualificationState(false);
            setTimelineState(false);
          }}
        >
          Experience
        </Typography>
        <Typography
          variant="h6"
          onClick={() => {
            setWokingState(false);
            setQualificationState(true);
            setTimelineState(false);
          }}
        >
          Basic Details
        </Typography>
        <Typography
          variant="h6"
          onClick={() => {
            setWokingState(false);
            setQualificationState(false);
            setTimelineState(true);
          }}
        >
          Some Things I Built
        </Typography>
      </div>
      <div className={classes.content1}>
        {workingState ? <Portfolio data={workData} /> : null}
        {qualificationState ? <Portfolio data={studyData} /> : null}
        {timelineState ? <Portfolio data={timelineElements} /> : null}
      </div>
    </div>
  );
};

export default Experience;
