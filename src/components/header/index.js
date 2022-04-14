import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../style/theme";
import { styles } from "./index.css";
import { Link } from "react-scroll";

function Header() {
  const classes = styles();
  return (
    <div className={classes.rootContainer}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          Logo
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Grid container spacing={4} justifyContent="end" alignItems="center">
            <Grid item>
              <Link to="about" spy={true} smooth={true}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  style={{ color: theme.text.bodyText, cursor: "pointer" }}
                >
                  01. About
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="experience" spy={true} smooth={true}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  style={{ color: theme.text.bodyText, cursor: "pointer" }}
                >
                  02. Experience
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="project" spy={true} smooth={true}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  style={{ color: theme.text.bodyText, cursor: "pointer" }}
                >
                  03. Work
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="contact" spy={true} smooth={true}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  style={{ color: theme.text.bodyText, cursor: "pointer" }}
                >
                  04. Contact
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
