import { NextResponse } from "next/server";
import { books } from "../../lib/data";

export async function GET() {
  const response = NextResponse.json(books);
  response.headers.set("Cache-Control", "no-store"); // Prevent caching
  return response;
}

export async function POST(request: Request) {
  const book = await request.json();
  books.push(book);
  return NextResponse.json(book, { status: 201 });
}
