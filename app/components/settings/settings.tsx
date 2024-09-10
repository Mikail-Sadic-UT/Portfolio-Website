"use client";
import React, { useState } from "react";
import styles from "./styles/page.module.css"
import Link from "next/link";
import { useTheme } from "next-themes";

const Settings: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const {theme, setTheme} = useTheme();

  const handleAboutClick = () => {
    setShowSettings(!showSettings);
  };
  

  return (
    <nav className={styles.setting}>
      <ul className={styles.list}>
        <li className={styles.settings}>
        <button onClick={handleAboutClick}><div className={styles.settings}>Settings</div></button>
          {showSettings && (
            <div>
              <div className={styles.slideText}>
                <h5 className={styles.themeText}>Theme</h5>
                <h4 className={styles.current}>Current: {theme}</h4>
                <h6 className={styles.click}><button className={styles.theme} onClick={() => setTheme("Dark")}>Dark </button> (Default)</h6>
                <p className={styles.subText}><button className={styles.theme} onClick={() => setTheme("Light")}>Light </button> (ew..)</p>
                {/*<h5 className={styles.themeText}>Info</h5>
                <p className={styles.stats}><Link className={styles.stats} href="/User-Stats">User Stats (WIP)</Link></p>*/}
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Settings;