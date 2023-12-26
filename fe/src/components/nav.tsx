import { Link } from "react-router-dom";
import style from "../css/nav.module.css";

export default function Nav() {
  
  return (
  <nav className={style.pageNav}>
    <ul className={style.navItems}>
      <li className={style.navItem}>
        <Link to="/" className={style.navLink}>Home</Link>
      </li>
    </ul>
  </nav>
  )
}