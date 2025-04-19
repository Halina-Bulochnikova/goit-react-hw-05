import { Link, useLocation } from "react-router-dom";

const MovieList = ({ results = [] }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.id}>
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