import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ results = [] }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.movieList}>
        {results.map((result) => {
          return (
            <li key={result.id} className={css.movieItem}>
              <Link to={`/movies/${result.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                  alt={result.title}
                />
                <span className={css.title}>{result.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;