import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles["navbar-nav"]}>
        <li>
          <Link href="/">
            <a>Cat Box</a>
          </Link>
        </li>
        <li>
          <Link href="/wi-kat">
            <a>WiKat</a>
          </Link>
        </li>
        <li>
          <Link href="/cat-videos">
            <a>Video</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
