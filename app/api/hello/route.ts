// app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Hello I am here")
  return NextResponse.json({ message: "Hello from Next.js 16 API!" });
}
