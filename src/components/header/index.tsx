import Link from "next/link";

import Navbar from './navbar';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.right}>
        <Link href="/login" className={styles.btn}>Login</Link>
        <Link href="/register" className={styles.btn}>Register</Link>
      </div>
    </header>
  );
}
