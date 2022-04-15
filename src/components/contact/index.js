import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../style/theme";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "../button";

function Contact({ id }) {
  const interested = [
    "Frontend Developer",
    "Project Manager",
    "Full Stack Developer",
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
      id={id}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText2 }}
      >
        <u style={{ color: theme.aquamarine.shade1, textDecoration: "none" }}>
          04.
        </u>
        What's Next?
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText }}
      >
        Get In Touch
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText, textAlign: "center" }}
      >
        I’m currently looking for any new opportunities and I'm available to
        join immediately, my inbox is always open. Whether you have a question
        or just want to say hi, I’ll make sure get back to you in 48 hours!
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        style={{
          color: theme.text.bodyText2,
          textAlign: "center",
          marginTop: 100,
        }}
      >
        Interested Roles
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        {interested.map((item, index) => {
          return (
            <Grid item xs={12} sm={12} md={4} lg={3} key={index}>
              <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                  <ArrowRightIcon style={{ color: theme.aquamarine.shade1 }} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    style={{
                      color: theme.aquamarine.shade1,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        onClick={() => {
          "mailto:venkateshmuralikrish@gmail.com";
        }}
        sx={{ mt: 3 }}
      >
        Say Hello!
      </Button>
    </div>
  );
}

export default Contact;
