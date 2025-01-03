import { books } from "../../../lib/data";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const book = books.find((b) => b.id === id);

  if (book) {
    const response = NextResponse.json(book);
    response.headers.set("Cache-Control", "no-store"); // Prevent caching
    return response;
  } else {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }
}
