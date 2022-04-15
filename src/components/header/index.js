import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../style/theme";
import { styles } from "./index.css";
import { Link } from "react-scroll";
import HeaderItem from "../header-item";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WebIconOutline from "@mui/icons-material/Web";
import WorkHistoryIconOutline from "@mui/icons-material/WorkHistory";
import ContactsIconOutline from "@mui/icons-material/Contacts";

function Header() {
  const classes = styles();
  return (
    <div className={classes.rootContainer}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          Logo
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={classes.mobileMenuContainer}>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Link to="about" spy={true} smooth={true}>
                  <HeaderItem title="About" Icon={PersonOutlineIcon} />
                </Link>
              </Grid>
              <Grid item>
                <Link to="experience" spy={true} smooth={true}>
                  <HeaderItem title="Experience" Icon={WebIconOutline} />
                </Link>
              </Grid>
              <Grid item>
                <Link to="project" spy={true} smooth={true}>
                  <HeaderItem title="Work" Icon={WorkHistoryIconOutline} />
                </Link>
              </Grid>
              <Grid item>
                <Link to="contact" spy={true} smooth={true}>
                  <HeaderItem title="Contact" Icon={ContactsIconOutline} />
                </Link>
              </Grid>
            </Grid>
          </div>
          <div className={classes.menuContainer}>
            <Grid
              container
              spacing={4}
              justifyContent="end"
              alignItems="center"
            >
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
