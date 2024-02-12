import Link from 'next/link';
import React from 'react';
import styles from "./styles/page.module.css";

export default function Page() {
  return (
    <main>
      <div className={styles.backButton}>
        <Link className={styles.backButton} href="/">
          <div className={styles.backArrow}>
          <span><div className={styles.backArrow}>&lt;</div></span>
          </div>
        </Link>
      </div>
      <div className={styles.title}>
        <h1 className={styles.mainTitle}>User Stats</h1>
      </div>
      <div>
        <p className={styles.projText}>Backend WIP</p>
      </div>
    </main>
  )
}
