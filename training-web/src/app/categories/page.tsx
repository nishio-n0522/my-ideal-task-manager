import Link from "next/link";
import type { Category } from "@/type";

async function getCategories() {
  try {
    const response = await fetch("http://localhost:8080/api/categories");
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: { categories: Category[] } = await response.json();
    return data.categories;
  } catch (error) {
    console.log("Fetch error", error);
  }
}

export default async function Page() {
  const categories = await getCategories();
  return (
    <div>
      <ul>
        {categories?.map(({ id, label, name }) => {
          return (
            <li key={id}>
              <Link href={`/categories/${name}`}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
