import { getBooks } from '../lib/api'
import BookList from '../components/BookList'

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Books</h1>
      <BookList books={books} />
    </div>
  )
}

