import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
  rootContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    minHeight: "100vh",
    "@media only screen and (max-width: 600px)": {
      paddingTop: 100,
    },
    "@media only screen and (min-width: 600px)": {},
    "@media only screen and (min-width: 992px)": {},
  },
  stepper: {
    "& .MuiStepLabel-label": {
      color: "#64ffda",
    },
    "&  .MuiStepLabel-label.Mui-active": {
      color: "#64ffda !important",
    },
    "& .MuiStepLabel-label.Mui-completed": {
      color: "#64ffda",
    },
    "& .MuiStepLabel-label.Mui-disabled": {
      color: "#64ffda",
    },
    "& .MuiStepIcon-root.Mui-active": {
      color: "#64ffda",
    },
    "& .MuiStepIcon-root.Mui-completed": {
      color: "#64ffda",
    },
    "& .MuiStepIcon-root.Mui-disabled": {
      color: "#64ffda",
    },
  },
});
