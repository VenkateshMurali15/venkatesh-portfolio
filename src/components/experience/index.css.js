import { makeStyles } from "@mui/styles";
import theme from "../../style/theme";

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
    "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
      color: `#64ffda !important`,
    },
    "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
      color: `#64ffda !important`,
    },
    "& .css-qivjh0-MuiStepLabel-label.Mui-completed": {
      color: `#64ffda !important`,
    },
    "& .css-qivjh0-MuiStepLabel-label.Mui-active": {
      color: `#64ffda !important`,
    },
    "& .css-16ubnlw-MuiStepLabel-labelContainer": {
      color: theme.text.bodyText2,
    },
  },
  newStepper: {
    "& .MuiStepLabel-label": {
      color: "#64ffda",
    },
    "&  .MuiStepLabel-label .Mui-active": {
      color: "#64ffda",
    },
    "& .MuiStepLabel-label .Mui-completed": {
      color: "#64ffda",
    },
    "& .MuiStepLabel-label .Mui-disabled": {
      color: "#64ffda",
    },
  },
});
