import { createUseStyles } from "react-jss";
import theme from "../../style/theme";

export const styles = createUseStyles({
  stepper: {
    "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
      color: theme.aquamarine.shade1,
    },
    "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
      color: theme.aquamarine.shade1,
    },
    "& .css-qivjh0-MuiStepLabel-label.Mui-completed": {
      color: theme.aquamarine.shade1,
    },
    "& .css-qivjh0-MuiStepLabel-label.Mui-active": {
      color: theme.aquamarine.shade1,
    },
    "& .css-16ubnlw-MuiStepLabel-labelContainer": {
      color: theme.text.bodyText2,
    },
  },
});
