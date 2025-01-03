import { books } from "../lib/data";
import BookList from "../components/BookList";

export default function BestsellersPage() {
  const bestsellerBooks = books.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bestselling Books</h1>
      <BookList books={bestsellerBooks} />
    </div>
  );
}
