import { Book } from "./types";

// Determine the base URL dynamically
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || // Use the environment variable in production
  (typeof window === "undefined"
    ? "http://localhost:3000" // Use this for SSR during local development
    : ""); // Empty string for client-side calls

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(`${API_BASE_URL}/api/books`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
}

export async function getBook(id: string): Promise<Book | null> {
  const res = await fetch(`${API_BASE_URL}/api/books/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    if (res.status === 404) {
      console.error(`Book with ID ${id} not found`);
      return null;
    }
    throw new Error(`Failed to fetch book with status ${res.status}`);
  }
  return res.json();
}
