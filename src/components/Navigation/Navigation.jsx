import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";


const Navigation = () => {
const setActiveClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

  return (
    <nav className={css.navigation}>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
