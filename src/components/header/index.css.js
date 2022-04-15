import { createUseStyles } from "react-jss";
import theme from "../../style/theme";

export const styles = createUseStyles({
  rootContainer: {
    background: theme.background.shade1,
    margin: "0px 40px",
  },
  mobileMenuContainer: {
    "@media only screen and (max-width: 600px)": {},
    "@media only screen and (min-width: 600px)": {},
    "@media only screen and (min-width: 992px)": { display: "none" },
  },
  menuContainer: {
    "@media only screen and (max-width: 600px)": { display: "none" },
    "@media only screen and (max-width: 992px)": { display: "none" },
    "@media only screen and (min-width: 992px)": {},
  },
  logoContainer: {
    "@media only screen and (max-width: 600px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "@media only screen and (min-width: 600px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "@media only screen and (min-width: 992px)": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
  logo: {
    "@media only screen and (max-width: 600px)": { width: 200, height: 200 },
    "@media only screen and (min-width: 600px)": { width: 200, height: 200 },
    "@media only screen and (min-width: 992px)": { width: 200, height: 100 },
  },
});
