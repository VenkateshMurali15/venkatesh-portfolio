import { Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../../style/theme";

const styles = createUseStyles({
  rootContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    "@media only screen and (max-width: 600px)": {
      justifyContent: "flex-start",
      paddingTop: 100,
      minHeight: "80vh",
    },
    "@media only screen and (min-width: 600px)": {
      height: "calc(100vh - 130px)",
    },
    "@media only screen and (min-width: 992px)": {
      height: "100vh",
    },
  },
});

function Welcome() {
  const classes = styles();
  return (
    <div className={classes.rootContainer}>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        style={{ color: theme.aquamarine.shade1 }}
      >
        Hi, my name is
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText }}
      >
        Venkatesh Murali.
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText2 }}
      >
        I build things for the web.
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText }}
      >
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <u
          href="https://www.cognizant.com/"
          style={{ color: theme.aquamarine.shade1, cursor: "pointer" }}
        >
          Cognizant.
        </u>
      </Typography>
    </div>
  );
}

export default Welcome;
