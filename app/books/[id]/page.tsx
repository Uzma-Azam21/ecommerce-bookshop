import { getBook } from "../../lib/api";
import BookDetail from "../../components/BookDetail";

export default async function BookPage({ params }: { params: { id: string } }) {
  try {
    const book = await getBook(params.id);

    if (!book) {
      console.error(`Book with ID ${params.id} not found`);
      return <div className="container mx-auto px-4 py-8">Book not found</div>;
    }

    return <BookDetail book={book} />;
  } catch (error) {
    console.error(`Error fetching book with ID ${params.id}:`, error);
    return (
      <div className="container mx-auto px-4 py-8">
        Error loading book details. Please try again later.
      </div>
    );
  }
}
