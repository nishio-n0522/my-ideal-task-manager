import { photos } from "@/_mock/photos";

export async function GET() {
  console.log("GET /api/photos");
  return Response.json({ photos });
}

export const dynamic = "force-dynamic";
