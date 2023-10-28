import { LoaderFunctionArgs } from "react-router-dom";
import { requestSearchBooks } from '../utils/requests';
import { SearchBookResponse, SearchBookOption, Book, BookItem } from '../types/search-book';

export async function booksLoader({ request }: LoaderFunctionArgs): Promise<{ total: number, books: Book[] }> {
  const url = new URL(request.url);

  if (!url.searchParams.has('query')) {
    return { total: 0, books: [] };
  }

  const options: SearchBookOption = new SearchBookOption({
    query: url.searchParams.get("query") ?? '개발',
    display: parseInt(url.searchParams.get('display') ?? '10'),
    start: parseInt(url.searchParams.get('start') ?? '1'),
    sort: url.searchParams.get('sort') ?? 'sim',
  });

  const searchBookResponse: SearchBookResponse = await requestSearchBooks(options);

  return {
    total: searchBookResponse.total,
    books: searchBookResponse.items.map((book: BookItem) => new Book(book))
  };
}