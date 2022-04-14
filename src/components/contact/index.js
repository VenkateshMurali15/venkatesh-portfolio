import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../style/theme";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
        <a style={{ color: theme.aquamarine.shade1 }}> 04.</a> What's Next?
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
        style={{ color: theme.text.bodyText2, textAlign: "center" }}
      >
        Interested Roles
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        {interested.map((item) => {
          return (
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Grid container>
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
      <u
        href="mailto:venkateshmuralikrish@gmail.com"
        style={{
          color: theme.aquamarine.shade1,
          marginTop: 25,
          cursor: "pointer",
        }}
      >
        Say Hello!
      </u>
    </div>
  );
}

export default Contact;
