"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import { IconButton } from "./IconButton";

function getAriaCurrent(flag: boolean) {
  return flag ? { "aria-current": "page" as const } : undefined;
}

export function Nav() {
  const pathName = usePathname();
  const openModal = () => console.log("写真を追加します。");

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" {...getAriaCurrent(pathName === "/")}>
            トップ
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            {...getAriaCurrent(pathName === "/categories")}
          >
            カテゴリー一覧
          </Link>
        </li>
      </ul>
      <IconButton onClick={openModal}>写真を投稿する</IconButton>
    </nav>
  );
}
