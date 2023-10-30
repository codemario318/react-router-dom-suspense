import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import { Book } from '../types/search-book';
import style from "../css/books.module.css"
import Loading from './loading';

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
            </li>
          )
        }

        </ul>
      </Suspense>
    </section>
  )
}