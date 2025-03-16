import Link from "next/link";
import styles from "./style.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <Link href="/">Photo Share</Link>
      </h1>
    </div>
  );
}
