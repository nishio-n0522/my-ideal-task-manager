import type { Photo, Category } from "@/type";
import styles from "./page.module.css";
import Link from "next/link";
import { LikeButton } from "./LikeButton";

type Props = {
  params: Promise<{ photoId: string }>;
};

async function getPhoto(photoId: string): Promise<Photo | null> {
  try {
    const response = await fetch(`http://localhost:8080/api/photos/${photoId}`);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status ${response.status}`);
    }
    const data: { photo: Photo } = await response.json();
    return data.photo;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getCategory(categoryId: string): Promise<Category | null> {
  try {
    const response = await fetch(
      `http://localhost:8080/api/categories/id/${categoryId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: { category: Category } = await response.json();
    return data.category;
  } catch (error) {
    console.log("Fetch error", error);
    return null;
  }
}

export default async function Page({ params }: Props) {
  let photoId: string | null = null;
  let photo: Photo | null = null;
  let category: Category | null = null;
  let errorMessage: string | null = null;

  try {
    photoId = (await params).photoId;
    photo = await getPhoto(photoId);
    if (!photo) {
      errorMessage = "Failed to get photo data.";
    } else {
      category = await getCategory(photo.categoryId);
    }
  } catch (error) {
    errorMessage = "Happend error to get data.";
  }

  return (
    <div>
      <h1>写真ID「{photo?.title}」の詳細画面</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>概要</th>
            <td>{photo?.description}</td>
          </tr>
          <tr>
            <th>カテゴリー</th>
            <td>
              {category ? (
                <Link href={`/categories/${category.name}`}>
                  {category.label}
                </Link>
              ) : (
                "カテゴリー情報が取得できませんでした。"
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <LikeButton photoId={photoId} />
    </div>
  );
}
