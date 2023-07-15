import React from "react";
import "./Portfolio.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button } from "@mui/material";

function Portfolio(props) {
  return (
    <div>
      <VerticalTimeline>
        {props.data.map((element) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={{ backgroundColor: "rgb(27,27,46)" }}
              icon={element.icon}
            >
              <h2 className="vertical-timeline-element-title">
                {element.title}
              </h2>
              <h3 className="vertical-timeline-element-subtitle">
                {element.location}
              </h3>
              {element.img && (
                <div className="view">
                  <img
                    src={element.img}
                    alt="project-view"
                    style={{
                      width: "100%",
                      marginTop: "1.5rem",
                      borderRadius: "16px",
                      boxShadow:
                        "0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%)",
                    }}
                  />
                </div>
              )}
              <p id="description">{element.description}</p>
              {element.message && (
                <h4 style={{ color: "#5fc1e2" }}>{element.message}</h4>
              )}
              <div className="button-demo-git">
                {element.demoButton && (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      window.open(element.link);
                    }}
                  >
                    {element.demoButton}
                  </Button>
                )}
                {element.gitButton && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      window.open(element.gitLink);
                    }}
                  >
                    {element.gitButton}
                  </Button>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Portfolio;
