// import React, { useState } from "react";
import styles from "../../Styling/nav.module.css";
import dumbmerch from "../../Images/frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Nav() {
  const isLogin = true;
  return (
    <div className={styles.Navbar}>
      <div className={styles.leftNav}>
        <NavLink to="/">
          <img src={dumbmerch} alt="Dumbmerch logo" />
        </NavLink>
      </div>
      <div className={styles.rightNav}>
        <div className={styles.links}>
          <NavLink to="/complain">Complain</NavLink>
          {isLogin ? (
            <div className={styles.links}>
              <NavLink to="/category">Category</NavLink>
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/">Log out</NavLink>
            </div>
          ) : (
            <NavLink to="/profile">Profile</NavLink>,
            <NavLink to="/login">Login</NavLink>
            )}
        </div>

        <label htmlFor="#Bars" className={styles.Bars}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          <button id="Bars"></button>
        </label>
      </div>
    </div>
  );
}

export default Nav;
