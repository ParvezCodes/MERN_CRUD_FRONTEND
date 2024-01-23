import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="https://parvezcodes.netlify.app">
            <i className="fa-solid fa-user-secret fa-flip fa-lg"></i>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
