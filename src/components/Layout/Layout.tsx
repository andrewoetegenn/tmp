import React from "react";
import { Sidebar } from "../Sidebar";
import "./Layout.css";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
