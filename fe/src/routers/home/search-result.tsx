import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import style from "../../css/books.module.css"

import { LoaderFunctionArgs } from "react-router-dom";
import { requestSearchBooks } from '@/utils/requests';
import { SearchBookResponse, SearchBookOption, Book, BookItem } from '@/types/search-book';

export async function loader({ request }: LoaderFunctionArgs): Promise<{ total: number, books: Book[] }> {
  const url = new URL(request.url);

  await new Promise(resolve => setTimeout(resolve, 1000));

  // return { total: 0, books: [] };
  
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

export default function SearchResult() {
  const { total, books } = useLoaderData() as { total: number, books: Book[] };

  return (
    <section id="books" className={style.books}>
      <Suspense fallback={<div>Loading...</div>}>
        <h2 className={style.booksHead}>검색 결과</h2>
        <span className={style.booksSubHead}>총 {total}건</span>
        <ul className={style.bookList}>{
          books.map((book: Book) =>
            <li className={style.bookListItem} key={`search-book-${book.isbn}`}>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className={style.bookLink}
              >
                <div className={style.bookThumb}>
                  <img src={book.image} alt="" className={style.bookThumbImg} width={462.5} height={600} />
                </div>
                <div className={style.bookDetail}>
                  <div className={style.bookInfo}>
                    <strong className={style.bookTitle}>{book.title}</strong>
                    <div className={style.author}>{book.author}</div>
                    <div className={style.publisher}>{book.publisher}</div>
                    <em className={style.price}>{book.discount}</em>
                  </div>
                  <div className={style.bookDescInfo}>
                    <p className={style.description}>{book.description}</p>
                  </div>
                </div>
              </a>
            </li>)
          }</ul>  
      </Suspense>  
    </section>
  )
}