import { Book } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

/**
 * Fetches the list of books from the API.
 * Ensures the latest data by using `cache: 'no-store'`.
 */
export async function getBooks(): Promise<Book[]> {
  const res = await fetch(`${API_BASE_URL}/books`, {
    cache: "no-store", // Prevent caching to ensure fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}

/**
 * Fetches a specific book by ID from the API.
 * Ensures fresh data and handles 404 errors gracefully.
 *
 * @param id - The ID of the book to fetch
 */
export async function getBook(id: string): Promise<Book | null> {
  const res = await fetch(`${API_BASE_URL}/books/${id}`, {
    cache: "no-store", // Prevent caching to ensure fresh data
  });

  if (!res.ok) {
    if (res.status === 404) {
      return null; // Return null if the book is not found
    }
    throw new Error("Failed to fetch book");
  }

  return res.json();
}
