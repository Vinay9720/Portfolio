import React from "react";
import "./Portfolio.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Portfolio(props) {
  return (
    <div>
      <VerticalTimeline>
        {props.data.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

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
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Portfolio;
