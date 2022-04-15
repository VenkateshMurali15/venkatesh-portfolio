import { Button as MButton } from "@mui/material";
import React from "react";

function Button({ variant, children, onClick, sx }) {
  return (
    <MButton
      variant={variant}
      onClick={onClick}
      sx={sx}
      style={{
        border: variant === "contained" ? "2px solid #64ffda" : "",
        color: "#64ffda",
        background: "#112240",
      }}
    >
      {children}
    </MButton>
  );
}

export default Button;
