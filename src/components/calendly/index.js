import React from "react";
import { PopupButton } from "react-calendly";
import theme from "../../style/theme";

function Calendly() {
  return (
    <div style={{ marginTop: 40 }}>
      <PopupButton
        url="https://calendly.com/venkateshmurali/30min"
        rootElement={document.getElementById("root")}
        text="Schedule a call!"
        styles={{
          background: theme.background.shade2,
          height: 40,
          borderRadius: 4,
          border: `2px solid ${theme.aquamarine.shade1}`,
          color: theme.aquamarine.shade1,
          textTransform: "uppercase",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default Calendly;
