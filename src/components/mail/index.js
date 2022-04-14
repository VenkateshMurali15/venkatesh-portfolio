import React from "react";
import theme from "../../style/theme";

function Mail() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <a
          href="mailto:venkateshmuralikrish@gmail.com"
          style={{
            writingMode: "vertical-rl",
            color: theme.text.bodyText,
            textDecoration: "none",
            lineHeight: 1.3,
            letterSpacing: "0.1rem",
            marginBottom: 16,
          }}
        >
          venkateshmuralikrish@gmail.com
        </a>
      </div>
      <div
        style={{
          borderRight: `2px solid ${theme.text.bodyText}`,
          height: 150,
        }}
      />
    </div>
  );
}

export default Mail;
