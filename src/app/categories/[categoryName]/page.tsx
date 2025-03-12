// "use client";

// import { useRouter } from "next/router";

// type Props = {
//   params: Promise<{ categoryName: string }>;
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };

// export default async function Page({ params, searchParams }: Props) {
//   const { categoryName } = await params;

//   const page =
//     typeof (await searchParams).page === "string"
//       ? (await searchParams).page
//       : "1";

//   const router = useRouter();

//   return (
//     <div>
//       <h1>カテゴリー別一覧画面</h1>
//       <h2>カテゴリー「{categoryName}」</h2>
//       <p>ページ番号: 「{page}」</p>
//       <button
//         onClick={() => {
//           router.push("/categories");
//         }}
//       >
//         カテゴリー一覧へ戻る
//       </button>
//     </div>
//   );
// }

import ClientPage from "./clientPage"; // クライアントコンポーネントをインポート

type Props = {
  params: Promise<{ categoryName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const categoryName = resolvedParams.categoryName;
  const page =
    typeof resolvedSearchParams.page === "string"
      ? resolvedSearchParams.page
      : "1";

  return <ClientPage categoryName={categoryName} page={page} />;
}
