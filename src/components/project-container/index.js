import { Folder } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../../style/theme";
import OpenInNewIconOutlined from "@mui/icons-material/OpenInNew";
import GitHubIconOutlined from "@mui/icons-material/GitHub";

const styles = createUseStyles({
  boxContainer: {
    background: theme.background.shade2,
    boxShadow: "0 10px 30px -15px #112240",
    borderRadius: 8,
    "@media only screen and (max-width: 600px)": {
      padding: 10,
      width: "100%",
    },
    "@media only screen and (min-width: 600px)": {
      width: 500,
      height: 200,
      marginTop: 24,
      padding: 25,
    },
    "@media only screen and (min-width: 992px)": {
      width: 500,
      height: 200,
      marginTop: 24,
      padding: 25,
    },
  },
});

function ProjectContainer() {
  const classes = styles();
  return (
    <div className={classes.boxContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justifyContent="space-between">
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Folder style={{ color: theme.aquamarine.shade1 }} />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <GitHubIconOutlined
                  style={{
                    color: theme.aquamarine.shade1,
                    marginRight: 8,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.open("https://github.com/VenkateshMurali15");
                  }}
                />
                <OpenInNewIconOutlined
                  style={{ color: theme.aquamarine.shade1, cursor: "pointer" }}
                  onClick={() => {
                    window.open(
                      "https://github.com/VenkateshMurali15/blog-site-prismic-nextjs"
                    );
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} lg={12}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            style={{ color: theme.text.bodyText2 }}
          >
            Built a Blog site using headless CMS
          </Typography>
        </Grid>
        <Grid item md={12} lg={12}>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            style={{ color: theme.text.bodyText2 }}
          >
            Built a Blog site using headless CMS
          </Typography>
        </Grid>
        <Grid item md={12} lg={12}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ color: theme.aquamarine.shade1 }}
              >
                Next JS
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ color: theme.aquamarine.shade1 }}
              >
                Tailwind CSS
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ color: theme.aquamarine.shade1 }}
              >
                Prismic
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectContainer;
