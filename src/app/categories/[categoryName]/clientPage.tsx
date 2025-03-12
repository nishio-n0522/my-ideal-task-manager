"use client";

import { useRouter } from "next/navigation"; // ✅ クライアントコンポーネント用の `useRouter`
import React from "react";

type ClientProps = {
  categoryName: string;
  page: string;
};

export default function ClientPage({ categoryName, page }: ClientProps) {
  const router = useRouter();

  return (
    <div>
      <h1>カテゴリー別一覧画面</h1>
      <h2>カテゴリー「{categoryName}」</h2>
      <p>ページ番号: 「{page}」</p>
      <button
        onClick={() => {
          router.push("/categories");
        }}
      >
        カテゴリー一覧へ戻る
      </button>
    </div>
  );
}
