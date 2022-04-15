import { createUseStyles } from "react-jss";
import theme from "../../style/theme";

export const styles = createUseStyles({
  rootContainer: {
    background: theme.background.shade1,
    margin: "20px 40px",
  },
  mobileMenuContainer: {
    "@media only screen and (max-width: 600px)": {},
    "@media only screen and (min-width: 600px)": {},
    "@media only screen and (min-width: 992px)": { display: "none" },
  },
  menuContainer: {
    "@media only screen and (max-width: 600px)": { display: "none" },
    "@media only screen and (min-width: 600px)": { display: "none" },
    "@media only screen and (min-width: 992px)": {},
  },
});
