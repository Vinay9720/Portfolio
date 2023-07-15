import React from "react";
import classes from "./ContactDetails.module.css";

import { Button, Link, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SocialMedia from "../../../MaterialUi/SocialMedia/SocialMedia";

import { useIntersectionObserver } from "@uidotdev/usehooks";

const ContactDetails = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  return (
    <div id="contact">
      <div className={classes.head}>
        <h2>Get In Touch</h2>
      </div>

      <div className={classes.getInTouch}>
        <p>
          “I create professional websites that your users will love. I work with
          you from start to finish to ensure that your goals are met and that
          you are satisfied. I also provide ongoing support and maintenance to
          keep your website up-to-date and running smoothly.
        </p>
        <p>
          Contact me by clicking the button below and lets build something
          awesome together.
        </p>
        {
          <div ref={ref}>
            {entry?.isIntersecting && (
              <div className={classes.bounceIn}>
                <Stack
                  direction="row"
                  sx={{
                    margin: "6rem auto",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <a href="tel:+91 9490795152">
                    <Button
                      variant="outlined"
                      startIcon={<PhoneIcon />}
                      sx={{ width: "150px", height: "50px" }}
                    >
                      Call Me
                    </Button>
                  </a>
                  <a href="mailto:mr.vinay9720@gmail.com" target="blank">
                    <Button
                      variant="outlined"
                      sx={{ width: "150px", height: "50px" }}
                      startIcon={<SendIcon />}
                    >
                      Email Me
                    </Button>
                  </a>
                </Stack>
              </div>
            )}
          </div>
        }
      </div>

      <div className={classes.socialMedia}>
        <p> Know Me More :</p> <SocialMedia />
      </div>
      <div className={classes.scrollBtn}>
        <Link href="#">
          <Button variant="outlined">
            <ArrowUpwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
