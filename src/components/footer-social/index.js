import { Grid } from "@mui/material";
import React from "react";
import theme from "../../style/theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  mainSection: {
    "@media only screen and (max-width: 600px)": {
      padding: "0px 0px 50px 0px",
    },
    "@media only screen and (min-width: 600px)": {
      padding: "0px 10px 50px 10px",
    },
    "@media only screen and (min-width: 992px)": {
      display: "none",
    },
  },
});

function FooterSocial() {
  const classes = styles();
  return (
    <div className={classes.mainSection}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={2} sm={2} md={3}>
          <GitHubIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open("https://github.com/VenkateshMurali15");
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={3}>
          <InstagramIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.instagram.com/venkatesh_murali/");
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={3}>
          <TwitterIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open("https://twitter.com/rockz_venkatesh");
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={3}>
          <LinkedInIcon
            style={{ color: theme.text.bodyText, cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/venkateshmuralikrishnan/"
              );
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterSocial;
