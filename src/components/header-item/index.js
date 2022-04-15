import React from "react";
import theme from "../../style/theme";

function HeaderItem({ title, Icon, href }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Icon style={{ color: theme.aquamarine.shade1 }} />
      <p style={{ color: theme.text.bodyText }}>{title}</p>
    </div>
  );
}

export default HeaderItem;
