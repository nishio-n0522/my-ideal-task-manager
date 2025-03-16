import { type NextRequest } from "next/server";
import { categories } from "@/_mock/categories";

export async function GET(
  _: NextRequest,
  { params }: { params: { categoryId: string } }
) {
  const { categoryId } = await params;
  const category = categories.find((category) => category.id === categoryId);
  if (!category) {
    return Response.json({ message: "Not Found" }, { status: 404 });
  }
  return Response.json({ category });
}
