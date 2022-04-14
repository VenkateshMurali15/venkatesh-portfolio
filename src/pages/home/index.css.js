import { createUseStyles } from "react-jss";
import theme from "../../style/theme";

export const styles = createUseStyles({
  rootContainer: {
    background: theme.background.shade1,
  },
  socialSection: {
    "@media only screen and (max-width: 600px)": { display: "none" },
    "@media only screen and (min-width: 600px)": {
      display: "none",
    },
    "@media only screen and (min-width: 992px)": {
      width: 40,
      position: "fixed",
      bottom: 0,
      left: 40,
      right: "auto",
      zIndex: 10,
    },
  },
  mailSection: {
    "@media only screen and (max-width: 600px)": { display: "none" },
    "@media only screen and (min-width: 600px)": {
      display: "none",
    },
    "@media only screen and (min-width: 992px)": {
      width: 40,
      position: "fixed",
      bottom: 0,
      right: 40,
      left: "auto",
      zIndex: 10,
    },
  },
  mainSection: {
    "@media only screen and (max-width: 600px)": { padding: 20 },
    "@media only screen and (min-width: 600px)": {
      padding: "0px 80px",
    },
    "@media only screen and (min-width: 992px)": {
      padding: "0px 250px",
    },
  },
});
