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
        <h2 className={styles.projName}>Portfolio Website | Jan 2024</h2>
        <p className={styles.projText}>My first main engineering project that I'm tackling to use for future projects I plan on doing. Built on Next.js (a React framework), HTML and CSS.</p>
        <p className={styles.ghubText}>Github:{" "}
          <Link className={styles.projLink} href="https://github.com/Mikail-Sadic-UT/Portfolio-Website" target="_blank" rel="noopener noreferrer">
          https://github.com/Mikail-Sadic-UT/Portfolio-Website
          </Link>
        </p>
        </div>
        <div>
       <h2 className={styles.projName}>Microcontroller Game | Apr 2024</h2>
        <p className={styles.projText}>The final project for my ECE-319K (Intro to Embedded Systems) class, which is a game built on C and running off of the TI-M0+ microcontroller.</p>
        <p className={styles.projText}>The game I made is a bullet-hell game, where the objective is to dodge the bullets shot from the boss while shooting back. 
        The game's main points are its difficulty, smoothness despite the number of entities on the screen, and the bullet patterns and boss phases themselves.</p>
        <p className={styles.projText}>This game was the winner of my class competition, and came 5th overall in the combined class competition.</p>
        <p className={styles.ghubText}>Youtube:{" "}
          <Link className={styles.projLink} href="https://www.youtube.com/watch?v=lAslunfPq5c" target="_blank" rel="noopener noreferrer">
          https://www.youtube.com/watch?v=lAslunfPq5c
          </Link>
        </p>
        <p className={styles.ghubText}>Github:{" "}
          <Link className={styles.projLink} href="https://github.com/Mikail-Sadic-UT/ECE-319K-Labs/tree/main/Lab9" target="_blank" rel="noopener noreferrer">
          https://github.com/Mikail-Sadic-UT/ECE-319K-Labs/tree/main/Lab9
          </Link>
        </p>
        </div>
        <div>
        <h2 className={styles.projName}>FPV RC Car | 2024</h2>
        <p className={styles.projText}>A project that I've organized and started up with a group of friends, with the goal of creating an FPV VR RC Car.
           The plan is to build it from the ground up as much as we can, from CAD, to PCBs, to Controllers, to Software.
            The idea is to drive the RC car in VR with a virtual wheel and real-time video feedback.
             This project includes the creation of custom CAD models, Unity C# VR integration, embedded C programming, and real-time video & control transmition.</p>
        <p className={styles.ghubText}>Github:{" "}
          <Link className={styles.projLink} href="https://github.com/Basement-Builders-Club" target="_blank" rel="noopener noreferrer">
          https://github.com/Basement-Builders-Club
          </Link>
        </p>
        </div>
      </div>
    </main>
  )
}