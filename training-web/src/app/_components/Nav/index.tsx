"use client";

import Link from "next/link";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

function getUserPath(flag: Boolean) {
  return flag ? { "aria-current": "page" as const } : undefined;
}

export default function Nav() {
  const userPath = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" {...getUserPath(userPath === "/")}>
            トップ
          </Link>
        </li>
        <li>
          <Link href="/categories" {...getUserPath(userPath === "/categories")}>
            カテゴリー一覧
          </Link>
        </li>
      </ul>
    </nav>
  );
}
