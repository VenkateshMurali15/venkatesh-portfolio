import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import theme from "../../style/theme";

function SocialSection() {
  return (
    <div>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item md={12} lg={12}>
          <GitHubIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open("https://github.com/Venkatesh157");
            }}
          />
        </Grid>
        <Grid item md={12} lg={12}>
          <InstagramIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.instagram.com/venkatesh_murali/");
            }}
          />
        </Grid>
        <Grid item md={12} lg={12}>
          <TwitterIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open("https://twitter.com/rockz_venkatesh");
            }}
          />
        </Grid>
        <Grid item md={12} lg={12}>
          <LinkedInIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/venkateshmuralikrishnan/"
              );
            }}
          />
        </Grid>
        <Grid item md={12} lg={12}>
          <div
            style={{
              borderRight: `2px solid ${theme.text.bodyText}`,
              height: 150,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SocialSection;
