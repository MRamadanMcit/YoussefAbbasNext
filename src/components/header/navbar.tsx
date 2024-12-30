import Link from "next/link";
import { GrTechnology } from "react-icons/gr";

import styles from './header.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/articles" className={styles.navLink}>
          Articles
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/admin" className={styles.navLink}>
          Admin Dashboard
        </Link>
      </ul>
    </nav>
  );
}