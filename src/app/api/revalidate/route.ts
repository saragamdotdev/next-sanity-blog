// https://<your-site.com>/api/revalidate?tag=collection&secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=aeca108f8623f3da9a52eb7e79cbd7fb

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  console.log(secret);

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid token" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
}
