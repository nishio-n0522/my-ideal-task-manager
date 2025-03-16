import { categories } from "../../../_mock/categories";

export async function GET() {
  return Response.json({ categories });
}
