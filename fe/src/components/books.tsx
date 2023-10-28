import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import style from "../css/books.module.css"
import Loading from './loading';
import { Book } from '../types/search-book';

export default function Search() {
  const { total, books } = useLoaderData() as { total: number, books: Book[] };

  return (
    <section id="books" className={style.books}>
      <h2 className={style.booksHead}>검색 결과</h2>
      <span className={style.booksSubHead}>총 {total}건</span>
      <Suspense fallback={<Loading />}>
        <ul className={style.bookList}>{
          books.map((book: Book) =>
            <li className={style.bookListItem} key={`search-book-${book.isbn}`}>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className={style.bookLink}
              >
                <strong className={style.bookTitle}>{book.title}</strong>
                <div className={style.bookThumb}>
                  <img src={book.image} alt="" className={style.bookThumbImg} />
                </div>
                <div className={style.bookDetail}>
                  <em className={style.price}>{book.discount}</em>
                  <div className={style.author}>{book.author}</div>
                  <div className={style.publisher}>{book.publisher}</div>
                </div>
              </a>
            </li>
          )
        }

        </ul>
      </Suspense>
    </section>
  )
}