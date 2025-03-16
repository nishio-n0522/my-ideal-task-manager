import Link from "next/link";
import { LikeButton } from "./LikeButton";

type Props = {
  params: Promise<{ photoId: string }>;
};

export default async function Page({ params }: Props) {
  const { photoId } = await params;
  return (
    <div>
      <h1>写真ID「{photoId}」の詳細画面</h1>
      <table>
        <tbody>
          <tr>
            <th>概要</th>
            <td>概要テキスト</td>
          </tr>
          <tr>
            <th>カテゴリー</th>
            <td>
              <Link href="/categories/flower">花</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <LikeButton photoId={photoId} />
    </div>
  );
}
