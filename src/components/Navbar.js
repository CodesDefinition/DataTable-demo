import React from "react";
import styles from "../css/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ userName }) {
  return (
    <nav>
      <div id={styles.navbar}>
        <img src="" alt="Insert Logo Here" />
        <ul id={styles.navlist}>
          <li className={styles.navlist}>
            <Link to="/Dashboard" className={styles.navitem}>
              Home
            </Link>
          </li>
          <li className={styles.navlist}>
            <Link to="/Members" className={styles.navitem}>
              Members
            </Link>
          </li>
        </ul>
        <div>{userName}</div>
      </div>
    </nav>
  );
}

export default Navbar;
