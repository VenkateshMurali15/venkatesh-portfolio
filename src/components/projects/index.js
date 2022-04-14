import { Typography } from "@mui/material";
import React from "react";
import theme from "../../style/theme";
import ProjectContainer from "../project-container";

function Project({ id }) {
  return (
    <div style={{ minHeight: "100vh" }} id={id}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText2 }}
      >
        <a style={{ color: theme.aquamarine.shade1 }}>03.</a>
        Other Noteworthy Projects
      </Typography>
      <div>
        <ProjectContainer />
      </div>
    </div>
  );
}

export default Project;
