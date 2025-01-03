import { books } from "../lib/data";
import BookList from "../components/BookList";

export default function DealsPage() {
  const dealBooks = books.filter((book) =>
    ["The Forty Rules of Love", "Atomic Habits", "The Alchemist"].includes(
      book.title
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Deals of the Week</h1>
      <BookList books={dealBooks} />
    </div>
  );
}
