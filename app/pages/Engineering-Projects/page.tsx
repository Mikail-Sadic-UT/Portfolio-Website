import Link from 'next/link';
import React from "react";
import styles from "./styles/page.module.css";
import Settings from "../../components/settings/settings"

export default function Page() {
  return (
    <main>
      <div className={styles.settings}><Settings/></div>
      <div className={styles.backButton}>
        <Link className={styles.backButton} href="/">
          <div className={styles.backArrow}>
          <span><div className={styles.backArrow}>&lt;</div></span>
          </div>
        </Link>
      </div>
      <div className={styles.title}>
        <h1 className={styles.mainTitle}>Engineering Projects</h1>
        <div>
        <h2 className={styles.projName}>Portfolio Website | Jan-Feb 2024</h2>
        <p className={styles.projText}>My first main engineering project that I'm tackling to use for future projects I plan on doing. Built on Next.js (a React framework), HTML and CSS.</p>
        <p className={styles.ghubText}>Github:{" "}
          <Link className={styles.projLink} href="https://github.com/Mikail-Sadic-UT/Portfolio-Website" target="_blank" rel="noopener noreferrer">
          https://github.com/Mikail-Sadic-UT/Portfolio-Website
          </Link>
        </p>
        </div>
        <div>
       <h2 className={styles.projName}>Microcontroller Game | Apr 2024 (Future)</h2>
        <p className={styles.projText}>The final project for my ECE-319K (Intro to Embedded Systems) class, which is a game built on C and running off of the TI-M0+ microcontroller.</p>
        </div>
        <div>
        <h2 className={styles.projName}>El Robot | 2024</h2>
        <p className={styles.projText}>A project I'm working on with a group of friends that's in the planning stage currently.</p>
        </div>
      </div>
    </main>
  )
}