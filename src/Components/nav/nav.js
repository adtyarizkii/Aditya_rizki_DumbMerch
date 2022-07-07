import React, { useState } from "react";
import styles from "../../Styling/nav.module.css";
import dumbmerch from "../../Images/frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    !showLinks ? setShowLinks(false) : setShowLinks(true);
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.leftNav}>
        <img src={dumbmerch} alt="Dumbmerch logo" />
      </div>
      <div className={styles.rightNav}>
        <div className={styles.links} id={showLinks ? "hidden" : ""}>
          <a href="/">Complain</a>
          <a href="/">Profile</a>
          <a href="/">Logout</a>
        </div>

        <label htmlFor="#Bars" className={styles.Bars}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          <button id="Bars" onClick={handleClick}></button>
        </label>
      </div>
    </div>
  );
}

export default Nav;
