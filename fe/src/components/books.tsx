import { Suspense } from "react";
import style from "../css/books.module.css"
import Loading from './loading';

export default function Search() {
  return (
    <section id="books" className={style.books}>
      <h2 className={style.booksHead}>검색 결과</h2>
      <span className={style.booksSubHead}>총 0 건</span>
      <Suspense fallback={<Loading />}>
        <ul className={style.bookList}>
          <li className={style.bookListItem}>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={style.bookLink}
            >
              <strong className={style.bookTitle}>책이름</strong>
              <div className={style.bookThumb}>
                <img src="" alt="" className={style.bookThumbImg} />
              </div>
              <div className={style.bookDetail}>
                <em className={style.price}>10,000원</em>
                <div className={style.author}>저자</div>
                <div className={style.publisher}>출판사</div>
              </div>
            </a>
          </li>
        </ul>
      </Suspense>
    </section>
  )
}