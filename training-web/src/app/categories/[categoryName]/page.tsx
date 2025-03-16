import Link from "next/link";
import { getPage } from "@/utils";
import type { Category, Photo } from "@/type";
import styles from "./page.module.css";

async function getCategory(categoryName: string): Promise<Category | null> {
  try {
    const response = await fetch(
      `http://localhost:8080/api/categories/${categoryName}`
    );
    const data: { category: Category } = await response.json();
    console.log("data", data);
    return data.category;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getPhotos(): Promise<Photo[] | null> {
  try {
    const response = await fetch("http://localhost:8080/api/photos");
    const data: { photos: Photo[] } = await response.json();
    return data.photos;
  } catch (error) {
    console.log(error);
    return null;
  }
}

type Props = {
  params: Promise<{ categoryName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { categoryName } = await params;
  const page = getPage(await searchParams);

  const [category, photos] = await Promise.all([
    getCategory(categoryName),
    getPhotos(),
  ]);

  console.log("photos", photos);
  console.log("category", category);

  return (
    <div>
      <h1>
        カテゴリー「{category?.label}」の「{page}」ページ目
      </h1>
      <ul>
        {photos
          ?.filter((photo) => photo.categoryId === category?.id)
          .map((photo) => (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>{photo.title}</Link>
            </li>
          ))}
      </ul>
      <ul className={styles.pagination}>
        {page !== 1 && (
          <li>
            <Link href={`/categories/${categoryName}?page=${page - 1}`}>
              前へ
            </Link>
          </li>
        )}
        <li>
          <Link href={`/categories/${categoryName}?page=${page + 1}`}>
            次へ
          </Link>
        </li>
      </ul>
    </div>
  );
}
