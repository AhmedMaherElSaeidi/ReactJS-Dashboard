import "./Layout.css"
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
        <Navbar/>
      <div className="layout-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
