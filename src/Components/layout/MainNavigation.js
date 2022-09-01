import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> News Feed</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sports" activeClassName={classes.active}>
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink to="/health" activeClassName={classes.active}>
              Health
            </NavLink>
          </li>
          <li>
            <NavLink to="/science" activeClassName={classes.active}>
              Science
            </NavLink>
          </li>
          <li>
            <NavLink to="/entertainment" activeClassName={classes.active}>
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" activeClassName={classes.active}>
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
