import React from "react";
import "./Layout.styles.scss";

const Layout = ({ children }) => {
  return <main className="layout">{children}</main>;
};

export default Layout;
