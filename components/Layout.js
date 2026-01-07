import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yugam Dhuriya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <footer className={styles.footer}>©2026 Yugam Dhuriya</footer>
    </div>
  );
}
