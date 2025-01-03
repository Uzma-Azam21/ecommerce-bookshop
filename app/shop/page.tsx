import { books } from '../lib/data'
import BookList from '../components/BookList'

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Books</h1>
      <BookList books={books} />
    </div>
  )
}

