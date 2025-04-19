import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={css.header}>
      <header>
        <Navigation />
      </header>
    </header>
  );
};
export default Header;
