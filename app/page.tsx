import Image from "next/image";
import styles from "./styles/page.module.css";
import Navbar from './components/navbar';
import Link from "next/link";
import Head from 'next/head'
import Settings from "./components/settings/settings"

export default function Page() {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><Settings/></div>
      <div className={styles.title}>
        <h1 className={styles.mainTitle}>Mikail Sadic</h1>
        <p className={styles.titleSubtext}>Student</p>
        <div>
          <Navbar/>
        </div>
      </div>
      <div></div>
    </main>
  )
}

//Hello World!