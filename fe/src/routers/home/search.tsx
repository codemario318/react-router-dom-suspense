import { Form } from "react-router-dom";
import style from "@/css/search.module.css";

export default function Search() {
  return (
    <section id="book-search" role="search" className={style.search}>
      <Form typeof="search">
        <select name="display" id="form-display" className={style.searchSelect}>
          <option value="10">10개 표시</option>
          <option value="10">20개 표시</option>
        </select>
        <select name="sort" id="form-sort" className={style.searchSelect}>
          <option value="sim">정확도순</option>
          <option value="date">출간일순</option>
        </select>
        <input type="text" name="query" id="form-keyword" className={style.searchKeyword} />
        <button type="submit" className={style.searchSubmit}>🔍︎</button>
      </Form>
    </section>
  )
}