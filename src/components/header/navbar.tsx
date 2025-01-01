"use client";

import Link from "next/link";
import { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import styles from "./header.module.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
        <div className={styles.menu} onClick={() => setToggle(!toggle)}>
          {toggle ? <IoCloseOutline /> : <AiOutlineMenu />}
        </div>
      </div>
      <div
        className={styles.navLinksWrapper}
        style={{
          clipPath: (toggle && "polygon(0 0%, 100% 0, 100% 100%, 0 99%)") || "",
        }}
      >
        <ul className={styles.navLinks}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setToggle(false)}
          >
            Home
          </Link>
          <Link
            href="/articles"
            className={styles.navLink}
            onClick={() => setToggle(false)}
          >
            Articles
          </Link>
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setToggle(false)}
          >
            About
          </Link>
          <Link
            href="/admin"
            className={styles.navLink}
            onClick={() => setToggle(false)}
          >
            Admin Dashboard
          </Link>
        </ul>
      </div>
    </nav>
  );
}
