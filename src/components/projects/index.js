import { Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../../style/theme";
import ProjectContainer from "../project-container";

const styles = createUseStyles({
  rootContainer: {
    "@media only screen and (max-width: 600px)": {
      paddingTop: 100,
      minHeight: "80vh",
    },
    "@media only screen and (min-width: 600px)": {},
    "@media only screen and (min-width: 992px)": {
      minHeight: "100vh",
    },
  },
  projectContainer: {
    margin: "40px 20px",
  },
});

function Project({ id }) {
  const classes = styles();
  return (
    <div className={classes.rootContainer} id={id}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText2 }}
      >
        <u style={{ color: theme.aquamarine.shade1, textDecoration: "none" }}>
          03.
        </u>
        Other Noteworthy Projects
      </Typography>
      <div className={classes.projectContainer}>
        <ProjectContainer />
      </div>
    </div>
  );
}

export default Project;
