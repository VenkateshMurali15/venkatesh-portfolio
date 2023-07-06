import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../style/theme";
import img from "../../assets/me_cochin.jpeg";
import { createUseStyles } from "react-jss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const styles = createUseStyles({
  rootContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    minHeight: "100vh",
    "@media only screen and (max-width: 600px)": {
      marginBottom: 100,
      paddingTop: 50,
    },
    "@media only screen and (min-width: 992px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },
  imageClass: {
    objectFit: "cover",
    borderRadius: 8,
    "@media only screen and (max-width: 600px)": { width: 340, height: 340 },
    "@media only screen and (min-width: 992px)": {
      width: 400,
      height: 400,
    },
  },
});

function About({ id }) {
  const classes = styles();

  const technologies = [
    "JavaScript (ES6+)",
    "React / Redux",
    "Tailwind CSS",
    "TypeScript",
    "Next JS",
    "Jest",
    "Playwright",
    "Jotai",
  ];

  return (
    <div className={classes.rootContainer} id={id}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText2 }}
      >
        <u style={{ color: theme.aquamarine.shade1, textDecoration: "none" }}>
          01.
        </u>
        About
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item md={6} lg={6}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{ color: theme.text.bodyText }}
              >
                Hello! My name is Venkatesh and I enjoy creating things that
                live on the internet. My interest in web development started
                back in 2019 when I started working on a FinTech Product.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{ color: theme.text.bodyText }}
              >
                Fast forward to today, and I've had the privilege of{" "}
                <a
                  href="https://hey.car/"
                  style={{ color: theme.aquamarine.shade1, cursor: "pointer" }}
                >
                  developing exceptional used car buying experiences at heycar
                </a>
                . My main focus these days is to work a startup and build
                accessible products and digital experiences.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{ color: theme.text.bodyText }}
              >
                Here are a few technologies I’ve been working with recently:
              </Typography>
              <Grid container spacing={2}>
                {technologies.map((item, index) => {
                  return (
                    <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                      <div style={{ display: "flex" }}>
                        <KeyboardDoubleArrowRightIcon
                          style={{ color: theme.aquamarine.shade1 }}
                        />
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          style={{ color: theme.text.bodyText }}
                        >
                          {item}
                        </Typography>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={6}>
          <img
            src={img}
            width={400}
            height={400}
            alt=""
            className={classes.imageClass}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
