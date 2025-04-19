import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ results = [] }) => {
  const location = useLocation();
  return (
    <div className={css.movieList}>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.id} className="{css.movieItem}">
              <Link to={`/movies/${result.id}`} state={{ from: location }}>
                {result.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;