import { Link } from "react-router-dom";

const TrendingList = ({results}) => {
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.id}>
              <Link to="result.id.toString">
                {result.title || result.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TrendingList;