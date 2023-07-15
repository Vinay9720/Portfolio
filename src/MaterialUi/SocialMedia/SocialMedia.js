import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import React from "react";

const SocialMedia = () => {
  return (
    <Stack spacing={1} direction={"row"}>
      <IconButton
        sx={{ color: "#3b5998 " }}
        aria-label="Facebook"
        size="large"
        onClick={() => {
          window.open("https://www.facebook.com");
        }}
      >
        <FacebookIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        sx={{ color: "#00ACEE" }}
        aria-label="Twitter"
        size="large"
        onClick={() => {
          window.open("https://www.twitter.com");
        }}
      >
        <TwitterIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        sx={{
          color: "#0A66C2",
        }}
        aria-label="LinkedIn"
        size="large"
        onClick={() => {
          window.open("https://www.linkedin.com/in/vinay-reddy-4141a5275/");
        }}
      >
        <LinkedInIcon fontSize="inherit" />
      </IconButton>

      <IconButton
        sx={{
          color: "#FFFFFF",
        }}
        aria-label="Git hub"
        size="large"
        onClick={() => {
          window.open("https://github.com/Vinay9720/Portfolio.git");
        }}
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default SocialMedia;
