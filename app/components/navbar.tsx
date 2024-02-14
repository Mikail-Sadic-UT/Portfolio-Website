"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/page.module.css";

const Navbar: React.FC = () => {
  const [showAboutText, setShowAboutText] = useState(false);
  const [showProjectsText, setShowProjectsText] = useState(false);
  const [showContactText, setShowContactText] = useState(false);

  const handleAboutClick = () => {
    setShowAboutText(!showAboutText);
  };

  const handleProjectsClick = () => {
    setShowProjectsText(!showProjectsText);
  };

  const handleContactClick = () => {
    setShowContactText(!showContactText);
  };

  return (
    <nav className={styles.main}>
      <ul className={styles.main}>
        <li className={styles.list}>
          <button onClick={handleAboutClick}><div className={styles.ex}>About</div></button>
          {showAboutText && (
            <div className={styles.slideDivA}>
              <div className={styles.slideText}>
                <p className={styles.aboutText}>
                Current Freshman at The University of Texas at Austin studying Electrical
                and Computer Engineering. I was born in 2005 in Cedar Park, Texas, and I have an interest and passion in engineering and programming.
                </p>
              </div>
            </div>
          )}
        </li>
        <li className={styles.list}>
          <button onClick={handleProjectsClick}><div className={styles.ex}>Projects</div></button>
          {showProjectsText && (
            <div className={styles.slideDivB}>
              <div className={styles.slideText}>
                <p className={styles.projectsText}>
                  <Link className={styles.projectsText} href="../pages/Engineering-Projects">Engineering Projects</Link>
                </p>
                <p className={styles.projectsText}>
                  <Link className={styles.projectsText} href="../pages/Hobby-Projects">Hobby Projects</Link>
                </p>
              </div>
            </div>
          )}
        </li>
        <li className={styles.list}>
          <button onClick={handleContactClick}><div className={styles.ex}>Extra</div></button>
          {showContactText && (
            <div className={styles.slideText}>
              <p className={styles.contactText}>Email: mikail.sadic@utexas.edu</p>
                <p className={styles.ghub}>Github:{" "}
                  <Link className={styles.ghub} href="https://github.com/Mikail-Sadic-UT" target="_blank" rel="noopener noreferrer">
                    https://github.com/Mikail-Sadic-UT
                  </Link>
              </p>
              <p className={styles.ghub}>LinkedIn:{" "}
                  <Link className={styles.ghub} href="https://www.linkedin.com/in/mikail-sadic/" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/mikail-sadic/
                  </Link>
              </p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
//poopu

export default Navbar;
