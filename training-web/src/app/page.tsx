import Link from "next/link";
import type { Photo } from "@/type";
import styles from "./page.module.css";

async function getPhotos() {
  try {
    const response = await fetch("http://localhost:8080/api/photos");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: { photos: Photo[] } = await response.json();
    return data.photos.map(({ id, title }) => ({ id, title }));
  } catch (error) {
    console.log("Fetch error", error);
    return null;
  }
}

export default async function Page() {
  const photos = await getPhotos();
  return (
    <div className={styles.container}>
      <h1>トップ画面</h1>
      <ul>
        {!!photos &&
          photos.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/photos/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
