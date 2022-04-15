import {
  Button,
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../style/theme";
import { styles } from "./index.css";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Experience({ id }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = styles();

  const steps = [
    {
      label: "Cognizant",
      description: [
        "Working as a part of the UI Team for US Retailer Macy’s migrating their codebase to the latest tech stack using React, TypeScript, and GraphQl.",
        "Panel member in Talent recruitment",
      ],
    },
    {
      label: "Hash Dhronas Digital LLP",
      description: [
        "Bootstrapped Hash Dhronas from scratch, and successfully delivered 16 projects to clients across 7 countries, thus ontributing to total revenue of $40,000.",
        "Ideated and executed marketing strategy for client acquisition.",
        "Work closely with stakeholders, identify their problem statement and write a detailed Scope document to ensure all requirements are met and make the development process easier.",
        "Designing Social media banners, posters, internal announcements banner, Low-Fiedility wireframes and small UI/UX requirements in Figma",
        "Actively developed Frontend modules from scratch for 3 applications using React, Redux, AntD, Material UI.",
        "Worked collaboratively with Design, Frontend, and Backend Teams to ensure the efficiency and performance of the application as well as verify the development with the scope of work.",
        "Deploy the frontend and backend modules using Netilify, and Vercel at end of each sprint for stakeholder approval and feedback.        ",
      ],
    },
    {
      label: "Wipro",
      description: [
        "Maintained front-end modules of a reputed banking firm and implemented new user modules based on requirements using Java and JSP, awarded “Best Team Player” Award.",
        "Studied best engineering practices and took part in code review, and brainstorming sessions with the team.",
      ],
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getRole = (index) => {
    if (index === 0) {
      return (
        <Typography
          variant="body2"
          gutterBottom
          component="div"
          style={{ color: theme.text.bodyText2 }}
        >
          Associate
        </Typography>
      );
    } else if (index === 1) {
      return (
        <Typography
          variant="body2"
          gutterBottom
          component="div"
          style={{ color: theme.text.bodyText2 }}
        >
          Co-Founder
        </Typography>
      );
    } else if (index === 2) {
      return (
        <Typography
          variant="body2"
          gutterBottom
          component="div"
          style={{ color: theme.text.bodyText2 }}
        >
          Project Engineer
        </Typography>
      );
    } else {
      return "Freelance";
    }
  };

  return (
    <div className={classes.rootContainer} id={id}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ color: theme.text.bodyText2 }}
      >
        <a
          style={{ color: theme.aquamarine.shade1 }}
          href="venkateshmurali.com"
        >
          02.
        </a>
        Where I have worked
      </Typography>
      <div className={classes.stepper}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          className={classes.stepper}
        >
          {steps.map((step, index) => (
            <Step
              key={step.label}
              style={{ color: theme.aquamarine.shade1 }}
              className={classes.stepper}
            >
              <StepLabel optional={getRole(index)}>{step.label}</StepLabel>
              <StepContent>
                <Grid container spacing={2}>
                  {step.description.map((item, indexs) => {
                    return (
                      <Grid item key={indexs}>
                        <div style={{ display: "flex" }}>
                          <KeyboardDoubleArrowRightIcon
                            style={{ color: theme.aquamarine.shade1 }}
                          />
                          <Typography style={{ color: theme.text.bodyText }}>
                            {item}
                          </Typography>
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>

                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
      {activeStep === steps.length && (
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          View Again!
        </Button>
      )}
    </div>
  );
}

export default Experience;
