import styles from "./layout.module.css";
import Link from "next/link";

export default function NextButton() {
  return (
    <>
      <Link href="/">
        <a className={styles["arrow"]}></a>
      </Link>
    </>
  );
}
