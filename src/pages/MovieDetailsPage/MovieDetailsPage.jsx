import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesById } from "../../servis/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchMoviesById(movieId);
        setResult(data);
      } catch (error) {
        console.error("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    loading ? (
      <p>Loading...</p>
    ) : (
      <>
        {result.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
            alt={result.title}
          />
        )}
        <h2>{result.title}</h2>
        <p>{result.overview || "Not describe"}</p>
        <p>Genres: {result.genres?.map((genre) => genre.name).join(", ")}</p>

        <nav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </>
    )
  )
}
export default MovieDetailsPage;