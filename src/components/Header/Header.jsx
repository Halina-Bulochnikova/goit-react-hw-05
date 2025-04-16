import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from "clsx";

const Header = () => {
    const setActiveClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
   
    return (
      <header className={css.header}>
        <nav className={css.headerNav}>
          <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>
          <NavLink className={setActiveClass} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
    );
}
export default Header;