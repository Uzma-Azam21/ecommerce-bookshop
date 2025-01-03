import { books } from "../lib/data";
import BookList from "../components/BookList";

export default function NewArrivalsPage() {
  const newArrivalBooks = books.filter((book) =>
    [
      "Rich Dad Poor Dad",
      "The Silent Patient",
      "The Ten Thousand Doors of January",
      "Think and Grow Rich",
    ].includes(book.title)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>
      <BookList books={newArrivalBooks} />
    </div>
  );
}
