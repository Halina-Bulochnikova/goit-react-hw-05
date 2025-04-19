import { Link } from "react-router-dom";

const MovieList = ({ results = [] }) => {
  return (
    <div>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.id}>
              <Link to={`/movies/${result.id}`}>
                {result.title || result.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;